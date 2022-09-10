import { Box } from '@mui/material';
import { Wrapper, WrapperBackground } from 'shared/ui/Wrapper';
import useGameControls from '../model/hooks/useGameControls';
import useGameInit from '../model/hooks/useGameInit';
import { IGameTitle } from '../model/constants';
import GameSetup from './GameSetup';
import GameControls from './GameControls';
import GameInit from './GameInit';

const Game = ({ game }: { game: IGameTitle }) => {
  const { fullscreenRef, isFull, isMuted, toggleSound, toggleFullscreen } = useGameControls();
  const { settings, isStart, handleStart, handleReset, handleGroupChange } = useGameInit();

  return (
    <Wrapper fullHeight={true}>
      <Box
        ref={fullscreenRef}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <WrapperBackground />
        <GameControls
          isFull={isFull}
          isMuted={isMuted}
          toggleSound={toggleSound}
          toggleFullscreen={toggleFullscreen}
        />
        {!isStart || isNaN(settings.page) ? (
          <GameInit
            game={game}
            settings={settings}
            handleStart={handleStart}
            handleGroupChange={handleGroupChange}
          />
        ) : (
          <GameSetup game={game} settings={settings} isMuted={isMuted} handleReset={handleReset} />
        )}
      </Box>
    </Wrapper>
  );
};

export default Game;
