import { Sprint, AudioCall } from 'widgets/Game';

export const MIN_WORDS_FOR_GAME_COUNT = 20;
export const PAGE_PER_GROUP_COUNT = 29; // starts from 0
export const INITIAL_GAME_SETTINGS = { group: NaN, page: NaN, fromBook: false };

export const GAMES_TITLES = ['SPRINT', 'AUDIO'];
export const GAMES = {
  [GAMES_TITLES[0]]: {
    title: 'Спринт',
    description:
      'Спринт - скоростная тренировка. В течение 30 секунд нужно угадывать, верный перевод предложен к английскому слову или нет.',
    component: Sprint,
  },
  [GAMES_TITLES[1]]: {
    title: 'Аудиовызов',
    description:
      'Аудиовызов - тренировка слуха. Прослушиваете английское слово и выбираете один из пяти вариантов ответа.',
    component: AudioCall,
  },
};

export type IGameTitle = keyof typeof GAMES;
export type IGameSettings = typeof INITIAL_GAME_SETTINGS;
