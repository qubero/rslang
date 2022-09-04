import { useCallback, useEffect, useRef } from 'react';
import { IGameProps } from '../lib/types';
import useGame from '../model/hooks/useGame';
import GameStat from './GameStat';
import Timer from './Timer';

const BTNS = ['верно', 'неверно'];
const m = [10, 10, 20, 30, 50, 80];

const Sprint = (props: IGameProps) => {
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
    handleFinish,
  } = useGame({ ...props, wordsForStepCount: 2 });

  const pointsRef = useRef(0);

  const handleChoice = useCallback(
    async (id: string) => {
      if (!isAnswered) {
        const res = await handleAnswer(id);
        if (res) {
          pointsRef.current += m[Math.min(Math.ceil(currentStat.currentStreak / 4), m.length)];
        }
        setTimeout(handleNextStep, 300);
      }
    },
    [currentStat.currentStreak, handleAnswer, handleNextStep, isAnswered]
  );

  useEffect(() => {
    const KEYS = ['Digit1', 'Digit2'];

    const handleKeyPress = async (e: KeyboardEvent) => {
      const index = KEYS.indexOf(e.code);

      if (index > -1 && !isAnswered) {
        await handleChoice(wordsForStep[index].id);
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [handleAnswer, handleNextStep, wordsForStep, isAnswered, handleChoice]);

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
      В игре спринт,
      <Timer handleFinish={handleFinish} />
      <div>Всего очков: {pointsRef.current}</div>
      <div>За верный ответ: {m[Math.min(Math.ceil(currentStat.currentStreak / 4), m.length)]}</div>
      <div>
        {words[currentWordIndex].word} - это {wordsForStep[0].wordTranslate}
      </div>
      {wordsForStep.map((w, idx) => (
        <button key={w.id} onClick={() => handleChoice(w.id)} style={getStyle(w.id)}>
          {idx + 1} {w.word} {BTNS[idx]}
        </button>
      ))}
    </>
  );
};

export default Sprint;
