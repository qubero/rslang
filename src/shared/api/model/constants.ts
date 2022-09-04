const API_URL = 'https://learn-words-api.herokuapp.com/';

const API_PATH = {
  USERS: 'users',
  WORDS: 'words',
  USER_WORD: (id: string, wordId: string) => `/users/${id}/words/${wordId}`,
  USER_WORDS: (id: string) => `users/${id}/words`,
  AGGREGATED_WORD: (id: string, wordId: string) => `/users/${id}/aggregatedWords/${wordId}`,
  AGGREGATED_WORDS: (id: string) => `users/${id}/aggregatedWords`,
  SIGNING: 'signin',
  TOKENS: (id: string) => `users/${id}/tokens`,
  STATISTICS: (id: string) => `/users/${id}/statistics`,
};

const TAG = {
  USERS: 'USERS',
  WORDS: 'WORDS',
  USER_WORD: 'USER_WORD',
  USER_WORDS: 'USER_WORDS',
  AGGREGATED_WORD: 'AGGREGATED_WORD',
  AGGREGATED_WORDS: 'AGGREGATED_WORDS',
  SIGNING: 'SIGNING',
  TOKENS: 'TOKENS',
  STATISTICS: 'STATISTICS',
};

export { API_URL, API_PATH, TAG };
