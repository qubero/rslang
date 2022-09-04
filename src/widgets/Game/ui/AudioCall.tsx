import { useEffect } from 'react';
import { API_URL } from 'shared/api/model/constants';
import { IGameProps } from '../lib/types';
import useGame from '../model/hooks/useGame';
import GameStat from './GameStat';
import SoundBtn from './SoundBtn';

const AudioCall = (props: IGameProps) => {
  const { words, isMuted, handleReset } = props;
  const {
    stat,
    currentStat,
    isAnswered,
    isFinished,
    currentWordIndex,
    wordsForStep,
    handleAnswer,
    handleNextStep,
  } = useGame({ ...props, wordsForStepCount: 5 });

  useEffect(() => {
    const KEYS = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5'];

    const handleKeyPress = async (e: KeyboardEvent) => {
      const index = KEYS.indexOf(e.code);

      if (index > -1 && !isAnswered) {
        await handleAnswer(wordsForStep[index].id);
      }

      if (e.code === 'KeyQ' && !isAnswered) {
        await handleAnswer('');
      }

      if (e.code === 'KeyR' && isAnswered) {
        handleNextStep();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [handleAnswer, handleNextStep, wordsForStep, isAnswered]);

  const getStyle = (id: string) => {
    if (!isAnswered) return {};

    if (words[currentWordIndex].id === id) return { background: 'green' };

    if (currentStat.currentAnsweredId === id && words[currentWordIndex].id !== id)
      return { background: 'red' };
  };

  return isFinished ? (
    stat && <GameStat isMuted={isMuted} stat={stat} handleReset={handleReset} />
  ) : (
    <>
      В игре аудиовызов,
      <div>
        {isAnswered && (
          <img src={API_URL + words[currentWordIndex].image} alt={words[currentWordIndex].word} />
        )}
        {words[currentWordIndex].word}
        <SoundBtn word={words[currentWordIndex]} isMuted={isMuted} />
      </div>
      {wordsForStep.map((w, idx) => (
        <button
          key={w.id}
          onClick={async () => !isAnswered && (await handleAnswer(w.id))}
          style={getStyle(w.id)}
        >
          {idx + 1} {w.word}
        </button>
      ))}
      <div>
        {isAnswered ? (
          <button onClick={handleNextStep}>R Дальше</button>
        ) : (
          <button onClick={() => handleAnswer('')}>Q Не знаю</button>
        )}
      </div>
    </>
  );
};

export default AudioCall;
