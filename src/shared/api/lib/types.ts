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
  __v: number;
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

type IUserWordDifficulty = 'easy' | 'hard';

interface IUserWord {
  id: Pick<IUserResponse, 'userId'>;
  wordId: string;
  difficulty: IUserWordDifficulty;
  optional: {
    isLearned: boolean;
    learnProgress: number;
  };
}

type IUserWordRequestPayload = Omit<IUserWord, 'id' | 'wordId'>;

interface IUserWordRequest {
  auth: IToken;
  wordId: string;
  body?: IUserWordRequestPayload;
}

interface IAggregatedWordsRequest {
  auth: IToken;
  params: {
    page?: number;
    group?: number;
    wordsPerPage?: number;
    filter?: string;
  };
}

interface IAggregatedWordsResponse {
  paginatedResults: Array<IWord & { _id: string }>;
  totalCount: Array<{ count: number }>;
}

export type {
  IWord,
  IWordsQuery,
  IUser,
  IUserResponse,
  IToken,
  IUserWord,
  IUserWordRequest,
  IUserWordRequestPayload,
  IUserWordDifficulty,
  IAggregatedWordsRequest,
  IAggregatedWordsResponse,
};
