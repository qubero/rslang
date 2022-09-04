import useGameControls from '../model/hooks/useGameControls';
import useGameInit from '../model/hooks/useGameInit';
import { IGameTitle } from '../model/constants';
import GameSetup from './GameSetup';
import GameControls from './GameControls';
import GameInit from './GameInit';

const Game = ({ game }: { game: IGameTitle }) => {
  const { fullscreenRef, isMuted, toggleSound, toggleFullscreen } = useGameControls();
  const { settings, isStart, handleStart, handleReset, handleGroupChange } = useGameInit();

  return (
    <div ref={fullscreenRef} style={{ background: 'white' }}>
      <GameControls
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
    </div>
  );
};

export default Game;
