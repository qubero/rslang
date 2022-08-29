interface IWord {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  wordTranslate: string;
}

interface IWordsQuery {
  page: number;
  group: number;
}

interface IUser {
  name?: string;
  email: string;
  password: string;
}

interface IUserResponse {
  name: string;
  userId: string;
  message: string;
  token: string;
  refreshToken: string;
}

interface IToken {
  id: string;
  token: string;
}

export type { IWord, IWordsQuery, IUser, IUserResponse, IToken };
