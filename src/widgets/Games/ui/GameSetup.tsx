import { GAMES, IGameSettings, IGameTitle } from '../model/constants';
import useGameSetup from '../model/hooks/useGameSetup';

type GameSetupProps = { game: IGameTitle; settings: IGameSettings };

const GameSetup = ({ game, settings }: GameSetupProps) => {
  const { component: Game } = GAMES[game];
  const { isReady, isError, words } = useGameSetup(settings);

  if (isError) return <>Ошибка получения слов</>;

  return !isReady ? <>Загрузка игры</> : <Game words={words} />;
};

export default GameSetup;
