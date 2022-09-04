import { GAMES_TITLES, MIN_WORDS_FOR_GAME_COUNT, PAGE_PER_GROUP_COUNT } from './model/constants';
import useGameSettings from './model/hooks/useGameSettings';
import Game from './ui/Game';
import type { IGameSettings } from './model/constants';

export {
  useGameSettings,
  Game,
  GAMES_TITLES,
  MIN_WORDS_FOR_GAME_COUNT,
  PAGE_PER_GROUP_COUNT,
  IGameSettings,
};
