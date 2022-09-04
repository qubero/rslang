import { GAMES } from '../model/constants';

type IGameInit = {
  game: string | number;
  settings: {
    page: number;
    group: number;
  };
  handleGroupChange: (g: number) => void;
  handleStart: () => void;
};

const GameInit = (props: IGameInit) => {
  const {
    game,
    settings: { group, page },
    handleGroupChange,
    handleStart,
  } = props;
  const { title, description } = GAMES[game];

  return (
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
          Выбранная группа: {group}, страница: {page}
        </>
      )}

      <button type="button" disabled={isNaN(page) || isNaN(group)} onClick={handleStart}>
        НАЧАТЬ
      </button>
    </div>
  );
};

export default GameInit;
