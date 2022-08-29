import { GAMES_TITLES, MIN_WORDS_FOR_GAME_COUNT, PAGE_PER_GROUP_COUNT } from './model/constants';
import useGameSettings from './model/hooks/useGameSettings';
import GameInit from './ui/GameInit';
import type { IGameSettings } from './model/constants';

export {
  useGameSettings,
  GameInit,
  GAMES_TITLES,
  MIN_WORDS_FOR_GAME_COUNT,
  PAGE_PER_GROUP_COUNT,
  IGameSettings,
};
