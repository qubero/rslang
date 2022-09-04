import { useEffect, useRef } from 'react';
import {
  useCreateUserWordMutation,
  useDeleteUserWordMutation,
  useGetUserWordsQuery,
  useUpdateUserWordMutation,
} from 'shared/api';
import { IUserWord } from 'shared/api/lib/types';
import { getDate } from 'shared/lib/utils';
import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import {
  HARD_USER_WORD,
  INITIAL_USER_WORD,
  LEARNED_USER_WORD,
  MIN_CORRECT_COUNT,
  MIN_HARD_CORRECT_COUNT,
  STEP,
} from '../constants';

const useUserWord = (wordId: string) => {
  const { isAuth, auth } = useAuth();
  const skip = !isAuth;

  const { words } = useGetUserWordsQuery(auth, {
    skip,
    selectFromResult: ({ data }) => ({ words: data ?? [] }),
  });
  const wordRef = useRef<IUserWord | null>(null);

  useEffect(() => {
    if (words.length) {
      wordRef.current = words.find((w) => w.wordId === wordId) || null;
    }
  }, [words, wordId]);

  const [createUserWord] = useCreateUserWordMutation();
  const [updateUserWord] = useUpdateUserWordMutation();
  const [deleteUserWord] = useDeleteUserWordMutation();

  const updateWord = async (body: typeof INITIAL_USER_WORD | null = null) => {
    if (skip) return;

    if (!wordRef.current && body) {
      try {
        body.optional.createdAt = getDate();

        if (body.optional.createdAt) {
          wordRef.current = await createUserWord({ auth, wordId, body }).unwrap();
        }
      } catch {
        return;
      }
    } else {
      try {
        if (body) {
          wordRef.current = await updateUserWord({ auth, wordId, body }).unwrap();
        } else {
          await deleteUserWord({ auth, wordId }).unwrap();
          wordRef.current = null;
        }
      } catch {
        return;
      }
    }
  };

  const markAsNew = async () => {
    await updateWord(INITIAL_USER_WORD);
  };

  const markAsDifficult = async () => {
    await updateWord(HARD_USER_WORD);
  };

  const markAsLearned = async () => {
    await updateWord(LEARNED_USER_WORD);
  };

  const handleDelete = async () => {
    await updateWord();
  };

  const handleSuccess = async () => {
    if (!wordRef.current) {
      const body = {
        ...INITIAL_USER_WORD,
        optional: {
          ...INITIAL_USER_WORD.optional,
          learnProgress: STEP,
        },
      };
      await updateWord(body);

      return;
    }

    if (wordRef.current.optional.isLearned) return;

    const { difficulty, optional } = { ...wordRef.current };
    const learnProgress = optional.learnProgress + STEP;

    const isLearned =
      difficulty === 'hard'
        ? learnProgress >= MIN_HARD_CORRECT_COUNT
        : learnProgress >= MIN_CORRECT_COUNT;

    if (isLearned) {
      await markAsLearned();
    } else {
      const body = { difficulty, optional: { ...optional, learnProgress } };
      await updateWord(body);
    }
  };

  const handleFail = async () => {
    if (!wordRef.current) {
      await updateWord(INITIAL_USER_WORD);
    } else {
      const { difficulty, optional } = { ...wordRef.current };
      const learnProgress = optional.learnProgress >= STEP ? optional.learnProgress - STEP : 0;

      const body = {
        difficulty,
        optional: {
          ...optional,
          learnProgress,
          isLearned: false,
        },
      };
      await updateWord(body);
    }
  };

  return {
    markAsNew,
    markAsDifficult,
    markAsLearned,
    handleDelete,
    handleSuccess,
    handleFail,
  };
};

export default useUserWord;
