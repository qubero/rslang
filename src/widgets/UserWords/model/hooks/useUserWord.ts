import { useEffect, useRef } from 'react';
import {
  useCreateUserWordMutation,
  useDeleteUserWordMutation,
  useGetUserWordsQuery,
  useUpdateUserWordMutation,
} from 'shared/api';
import { IUserWord } from 'shared/api/lib/types';
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

  const checkWord = async () => {
    if (!wordRef.current) {
      try {
        const query = { auth, wordId, body: INITIAL_USER_WORD };
        wordRef.current = await createUserWord(query).unwrap();
      } catch {}
    }
  };

  const markAsDifficult = async () => {
    if (skip) return;
    await checkWord();
    updateUserWord({ auth, wordId, body: HARD_USER_WORD });
  };

  const markAsLearned = async () => {
    if (skip) return;
    await checkWord();
    updateUserWord({ auth, wordId, body: LEARNED_USER_WORD });
  };

  const handleDelete = async () => {
    if (skip) return;
    await checkWord();
    deleteUserWord({ auth, wordId });
  };

  const handleSuccess = async () => {
    if (skip) return;
    await checkWord();
    if (!wordRef.current || wordRef.current.optional.isLearned) return;

    const { difficulty, optional } = { ...wordRef.current };
    const learnProgress = optional.learnProgress + STEP;

    const isLearned =
      difficulty === 'hard'
        ? learnProgress >= MIN_HARD_CORRECT_COUNT
        : learnProgress >= MIN_CORRECT_COUNT;

    if (isLearned) {
      markAsLearned();
    } else {
      const body = { difficulty, optional: { ...optional, learnProgress } };
      updateUserWord({ auth, wordId, body });
    }
  };

  return {
    markAsDifficult,
    markAsLearned,
    handleDelete,
    handleSuccess,
  };
};

export default useUserWord;
