import { IUserWord, IUserWordDifficulty } from 'shared/api/lib/types';
import { getDate } from 'shared/lib/utils';

const MIN_CORRECT_COUNT = 3;
const MIN_HARD_CORRECT_COUNT = 5;
const STEP = 1;

const INITIAL_USER_WORD: Pick<IUserWord, 'optional' | 'difficulty'> = {
  difficulty: 'easy' as IUserWordDifficulty,
  optional: {
    isLearned: false,
    learnProgress: 0,
    createdAt: getDate(),
  },
};

const HARD_USER_WORD: Pick<IUserWord, 'optional' | 'difficulty'> = {
  difficulty: 'hard' as IUserWordDifficulty,
  optional: {
    isLearned: false,
    learnProgress: 0,
    createdAt: getDate(),
  },
};

const LEARNED_USER_WORD: Pick<IUserWord, 'optional' | 'difficulty'> = {
  difficulty: 'easy' as IUserWordDifficulty,
  optional: {
    isLearned: true,
    learnProgress: MIN_CORRECT_COUNT,
    createdAt: getDate(),
  },
};

export {
  MIN_CORRECT_COUNT,
  MIN_HARD_CORRECT_COUNT,
  STEP,
  INITIAL_USER_WORD,
  LEARNED_USER_WORD,
  HARD_USER_WORD,
};
