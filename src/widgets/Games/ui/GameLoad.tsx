import { MutableRefObject, useLayoutEffect } from 'react';
import { IWord } from 'shared/api/lib/types';
import useGameSetup from '../model/hooks/useGameSetup';

type IGameLoadProps = {
  isWordsReady: boolean;
  isWordsError: boolean;
  setIsWordsReady: (arg0: boolean) => void;
  setIsWordsError: (arg0: boolean) => void;
  words: MutableRefObject<IWord[]>;
  settings: { group: number; page: number; fromBook: boolean };
};

const GameLoad = (props: IGameLoadProps) => {
  const { settings, isWordsReady, setIsWordsReady, isWordsError, setIsWordsError, words } = props;
  const { isReady, isError, words: currentWords } = useGameSetup(settings);

  useLayoutEffect(() => {
    if (isWordsError || isWordsReady) return;

    if (isError) {
      setIsWordsError(true);
    }

    if (isReady) {
      words.current = currentWords;
      setIsWordsReady(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady, isError, currentWords]);

  return <>Загрузка игры</>;
};

export default GameLoad;
