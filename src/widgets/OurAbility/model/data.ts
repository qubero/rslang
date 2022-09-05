import book from '../assets/book.jpg';
import dictionary from '../assets/dictionary.jpg';
import games from '../assets/games.jpg';
import statistics from '../assets/statistics.jpg';

const cardData = [
  {
    src: `${book}`,
    alt: 'book',
    title: 'Учебник',
    description: 'В учебнике собраны 3600 самых используемых в повседневной жизни слов.',
  },
  {
    src: `${dictionary}`,
    alt: 'dictionary',
    title: 'Словарь',
    description: 'Все слова которые ты изучил попадают в твой личный словарь.',
  },
  {
    src: `${games}`,
    alt: 'games',
    title: 'Игры',
    description: 'Сделайте изучение слов более увлекательным с помощью мини-игр!',
  },
  {
    src: `${statistics}`,
    alt: 'statistics',
    title: 'Статистика',
    description: 'Подробная статистика твоих достижений, изученных слов и ошибок.',
  },
];

export { cardData };
