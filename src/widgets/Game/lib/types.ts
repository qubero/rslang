import { IWord } from 'shared/api/lib/types';

export interface IGameProps {
  words: IWord[];
  isMuted: boolean;
  handleReset: () => void;
  wordsForStepCount?: number;
}

export interface IInitialStat {
  currentAnsweredId: string | null;
  currentStreak: number;
  newWordsCount: number;
  successCount: number;
  successStreak: number;
  currentDate: string | null;
}

export interface IFinalStat {
  successCount: number;
  successStreak: number;
  newWordsCount: number;
  currentDate: string;
  successWords: IWord[];
  failWords: IWord[];
}
