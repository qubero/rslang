interface IErrorState {
  hasError: boolean;
}

interface IErrorProps {
  children: JSX.Element;
}

interface IModalProps {
  children: JSX.Element[] | JSX.Element;
  open: boolean;
  handlerClose: () => void;
}

interface IWord {
  _id: {
    $oid: string;
  };
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
  email: string;
  password: string;
}

export type { IErrorState, IErrorProps, IModalProps, IWord, IWordsQuery, IUser };
