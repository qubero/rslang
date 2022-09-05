import { Badge, Box, Button, Grow, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
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
  } = useGame('audiocall', { ...props, wordsForStepCount: 5 });

  const pressedRef = useRef(false);

  useEffect(() => {
    const KEYS = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5'];

    const handleKeyPress = async (e: KeyboardEvent) => {
      if (pressedRef.current) return;
      pressedRef.current = true;

      const index = KEYS.indexOf(e.code);

      if (index > -1 && !isAnswered) {
        await handleAnswer(wordsForStep[index].id);
      }

      if (e.code === 'KeyQ' && !isAnswered) {
        await handleAnswer('');
      }

      if (e.code === 'KeyQ' && isAnswered) {
        handleNextStep();
      }

      setTimeout(() => (pressedRef.current = false));
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [handleAnswer, handleNextStep, wordsForStep, isAnswered]);

  const getStyle = (id: string) => {
    if (!isAnswered) return {};

    if (words[currentWordIndex].id === id) return { background: '#2e7d32' };

    if (currentStat.currentAnsweredId === id && words[currentWordIndex].id !== id)
      return { background: '#d32f2f' };
  };

  return isFinished ? (
    stat && <GameStat isMuted={isMuted} stat={stat} handleReset={handleReset} />
  ) : (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <div
        style={{
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          transform: 'translateY(-20px)',
        }}
      >
        {isAnswered && (
          <Grow in={isAnswered} timeout={1000}>
            <div>
              <img
                src={API_URL + words[currentWordIndex].image}
                alt={words[currentWordIndex].word}
                style={{ borderRadius: '5px', height: 150 }}
              />
              <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                {words[currentWordIndex].word}
              </Typography>
            </div>
          </Grow>
        )}
        <SoundBtn word={words[currentWordIndex]} isMuted={isMuted} />
      </div>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
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
              variant="outlined"
              onClick={async () => !isAnswered && (await handleAnswer(w.id))}
              style={getStyle(w.id)}
            >
              {w.word}
            </Button>
          </Badge>
        ))}
      </Box>
      <div>
        {isAnswered ? (
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            color="info"
            badgeContent={'Q'}
          >
            <Button variant="contained" onClick={handleNextStep}>
              Дальше
            </Button>
          </Badge>
        ) : (
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            color="info"
            badgeContent={'Q'}
          >
            <Button variant="contained" onClick={() => handleAnswer('')}>
              Не знаю
            </Button>
          </Badge>
        )}
      </div>
    </Box>
  );
};

export default AudioCall;
