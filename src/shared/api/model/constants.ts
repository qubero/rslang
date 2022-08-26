const API_URL = 'https://learn-words-api.herokuapp.com/';

const API_PATH = {
  USERS: 'users',
  WORDS: 'words',
  SIGNING: 'signin',
  TOKENS: (id: string) => `users/${id}/tokens`,
};

export { API_URL, API_PATH };
