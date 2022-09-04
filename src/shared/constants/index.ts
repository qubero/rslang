import { IStatistic } from 'shared/api/lib/types';
import { getDate } from 'shared/lib/utils';

const ROUTE_PATH = {
  INDEX: '/',
  BOOK: 'book',
  SPRINT: 'sprint',
  AUDIOCALL: 'audiocall',
  INFO: 'info',
};
const INITIAL_STATISTICS: IStatistic = {
  learnedWords: 0,
  optional: {
    newWords: { [getDate()]: 0 },
    famousWords: { [getDate()]: 0 },
    sprint: {
      currentDate: getDate(),
      newWordsCount: 0,
      successCount: 0,
      successStreak: 0,
    },
    audiocall: {
      currentDate: getDate(),
      newWordsCount: 0,
      successCount: 0,
      successStreak: 0,
    },
  },
};

const STORAGE_AUTH_USER = 'Team30-UserAuth';

export { ROUTE_PATH, STORAGE_AUTH_USER, INITIAL_STATISTICS };
