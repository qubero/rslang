import { useCallback, useEffect, useRef, useState } from 'react';
import { getDate } from 'shared/lib/utils';
import { IFinalStat, IGameProps } from 'widgets/Game/lib/types';
import { useUserStatistics } from 'widgets/StatisticsTabs/model/hooks';
import { useUserWord } from 'widgets/UserWords';

import { INITIAL_STAT } from '../constants';
import { getWordsForStep } from '../utils';
import useAudio from './useAudio';

const useGame = (title: string, props: IGameProps) => {
  const { words, isMuted, wordsForStepCount } = props;
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordsForStep, setWordsForStep] = useState(
    getWordsForStep(words, currentWordIndex, wordsForStepCount)
  );

  const { handleSuccess, handleFail } = useUserWord(words[currentWordIndex].id);
  const { audioOnSuccess, audioOnFail } = useAudio();

  const statRef = useRef({ ...INITIAL_STAT });
  const [finalStat, setFinalStat] = useState<null | IFinalStat>(null);

  const { updateGameStats } = useUserStatistics();

  useEffect(() => {
    if (isFinished) {
      if (!finalStat) {
        const stat = {
          successCount: +(statRef.current.successCount / 2).toFixed(1),
          successStreak: statRef.current.successStreak,
          newWordsCount: words.filter((w) => !w.userWord).length,
          currentDate: getDate(),
        };

        updateGameStats(title as 'sprint' | 'audiocall', stat);

        setFinalStat({
          ...stat,
          successCount: statRef.current.successCount,
          successWords: words.filter((w) => w.answered),
          failWords: words.filter((w) => !w.answered),
        });
      }
    } else {
      statRef.current = { ...INITIAL_STAT };
      setFinalStat(null);
      setCurrentWordIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, isFinished, setCurrentWordIndex, words, finalStat, setFinalStat]);

  useEffect(() => {
    setWordsForStep(getWordsForStep(words, currentWordIndex, wordsForStepCount));
  }, [words, currentWordIndex, setWordsForStep, wordsForStepCount]);

  const handleNextStep = useCallback(() => {
    statRef.current.currentAnsweredId = null;

    if (currentWordIndex === words.length - 1) {
      setIsFinished(true);
    } else {
      setCurrentWordIndex((prev) => prev + 1);
      setIsAnswered(false);
    }
  }, [currentWordIndex, words.length]);

  const handleAnswer = useCallback(
    async (id: string) => {
      const { current: stat } = statRef;
      stat.currentAnsweredId = id;

      if (id === words[currentWordIndex].id) {
        if (!isMuted) audioOnSuccess.play();
        await handleSuccess();
        stat.currentStreak += 1;
        stat.successCount += 1;
        words[currentWordIndex].answered = true;
      } else {
        if (!isMuted) audioOnFail.play();
        await handleFail();
        stat.currentStreak = 0;
        words[currentWordIndex].answered = false;
      }

      if (stat.currentStreak > stat.successStreak) {
        stat.successStreak = stat.currentStreak;
      }

      setIsAnswered(true);

      return id === words[currentWordIndex].id;
    },
    [audioOnFail, audioOnSuccess, currentWordIndex, words, isMuted, handleSuccess, handleFail]
  );

  const handleFinish = () => {
    setIsFinished(true);
  };

  return {
    stat: finalStat,
    currentStat: statRef.current,
    isAnswered,
    isFinished,
    currentWordIndex,
    wordsForStep,
    handleAnswer,
    handleNextStep,
    handleFinish,
  };
};

export default useGame;
