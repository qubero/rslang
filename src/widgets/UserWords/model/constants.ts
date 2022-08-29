import { IUserWordDifficulty } from 'shared/api/lib/types';

const MIN_CORRECT_COUNT = 3;
const MIN_HARD_CORRECT_COUNT = 5;
const STEP = 1;

const INITIAL_USER_WORD = {
  difficulty: 'easy' as IUserWordDifficulty,
  optional: {
    isLearned: false,
    learnProgress: 0,
  },
};

const HARD_USER_WORD = {
  difficulty: 'hard' as IUserWordDifficulty,
  optional: {
    isLearned: false,
    learnProgress: 0,
  },
};

const LEARNED_USER_WORD = {
  difficulty: 'easy' as IUserWordDifficulty,
  optional: {
    isLearned: true,
    learnProgress: MIN_CORRECT_COUNT,
  },
};

const DEFAULT_HARD_FILTER = '{"$and":[{"userWord.difficulty":"hard"}]}';
const DEFAULT_LEARNED_FILTER = '{"$and":[{"userWord.difficulty":"easy"}]}';

export {
  MIN_CORRECT_COUNT,
  MIN_HARD_CORRECT_COUNT,
  STEP,
  INITIAL_USER_WORD,
  LEARNED_USER_WORD,
  HARD_USER_WORD,
  DEFAULT_HARD_FILTER,
  DEFAULT_LEARNED_FILTER,
};
