import useGameInit from '../model/hooks/useGameInit';
import { GAMES, IGameTitle } from '../model/constants';
import GameSetup from './GameSetup';

const GameInit = ({ game }: { game: IGameTitle }) => {
  const { title, description } = GAMES[game];
  const { isStart, handleStart, settings, handleGroupChange } = useGameInit();
  const { group, page } = settings;

  return !isStart || isNaN(page) ? (
    <div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      {isNaN(group) ? (
        <>
          Выберите группу:{' '}
          {[0, 1, 2, 3, 4, 5].map((g: number) => (
            <button key={g} onClick={() => handleGroupChange(g)}>
              {g}
            </button>
          ))}
        </>
      ) : (
        <>
          Выбранная группа: {settings.group}, страница: {settings.page}
        </>
      )}

      <button type="button" disabled={isNaN(page) || isNaN(group)} onClick={handleStart}>
        НАЧАТЬ
      </button>
    </div>
  ) : (
    <GameSetup game={game} settings={settings} />
  );
};

export default GameInit;
