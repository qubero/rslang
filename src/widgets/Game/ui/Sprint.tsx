import { AccessTime, RadioButtonChecked, RadioButtonUnchecked } from '@mui/icons-material';
import { Badge, Box, Button, Rating, Typography } from '@mui/material';
import { useCallback, useEffect, useRef } from 'react';
import { IGameProps } from '../lib/types';
import useGame from '../model/hooks/useGame';
import GameStat from './GameStat';
import Timer from './Timer';

const BTNS = [
  ['верно', '#2e7d32'],
  ['неверно', '#d32f2f'],
];
const POINTS = [10, 10, 20, 30, 50, 80];

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
  } = useGame('sprint', { ...props, wordsForStepCount: 2 });

  const pointsRef = useRef(0);
  const boxRef = useRef<HTMLDivElement>(null);

  const pressedRef = useRef(false);

  const handleChoice = useCallback(
    async (id: string) => {
      if (!isAnswered) {
        if (pressedRef.current) return;
        pressedRef.current = true;

        const res = await handleAnswer(id);

        if (res) {
          pointsRef.current +=
            POINTS[Math.min(Math.ceil(currentStat.currentStreak / 4), POINTS.length)];
        }

        if (boxRef.current) {
          boxRef.current.style.boxShadow = res
            ? '0 3px 10px rgb(0 255 0 / 0.2)'
            : '0 3px 10px rgb(255 0 0 / 0.2)';
        }

        setTimeout(() => {
          if (boxRef.current) boxRef.current.style.boxShadow = 'none';
          handleNextStep();
          setTimeout(() => (pressedRef.current = false));
        }, 300);
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

  return isFinished ? (
    stat && <GameStat isMuted={isMuted} stat={stat} handleReset={handleReset} />
  ) : (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        padding: '20px',
        minWidth: '500px',
        maxWidth: '100%',
        borderRadius: '15px',
      }}
      ref={boxRef}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '50px',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Oчки: {pointsRef.current}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <AccessTime />
          <Timer handleFinish={handleFinish} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          + {POINTS[Math.min(Math.ceil(currentStat.currentStreak / 4), POINTS.length)]} очков за
          слово
        </Typography>
        <Rating
          value={currentStat.currentStreak}
          icon={<RadioButtonChecked fontSize="inherit" />}
          emptyIcon={<RadioButtonUnchecked fontSize="inherit" />}
          readOnly
          max={4}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          margin: '50px 0',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {words[currentWordIndex].word}
        </Typography>
        это
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {wordsForStep[0].wordTranslate}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '20px',
        }}
      >
        {wordsForStep.map((w, idx) => (
          <Badge
            key={w.id}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            color="info"
            badgeContent={idx + 1}
          >
            <Button
              onClick={async () => {
                await handleChoice(w.id);
              }}
              sx={{
                background: BTNS[idx][1],
              }}
            >
              {BTNS[idx][0]}
            </Button>
          </Badge>
        ))}
      </Box>
    </Box>
  );
};

export default Sprint;
