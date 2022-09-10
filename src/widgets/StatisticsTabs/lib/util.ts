import { IGameStatistic, IUserWord } from 'shared/api/lib/types';
import { getDate } from 'shared/lib/utils';

const getFilteredWords = (item: IUserWord) => {
  const currentDate = getDate();
  return item.optional.isLearned && item.optional.createdAt === currentDate;
};

const getTotalPercent = (sprint: number, audiocall: number) => {
  if (!sprint) return (audiocall * 10).toFixed(0);
  if (!audiocall) return (sprint * 10).toFixed(0);
  return (((sprint + audiocall) / 2) * 10).toFixed(0);
};

const checkDate = (date: string) => date === getDate();

const getAmountWords = (game: IGameStatistic, key: keyof IGameStatistic) => {
  return (checkDate(game.currentDate) && game[key]) || 0;
};

const getGamePercent = (game: IGameStatistic, key: keyof IGameStatistic) => {
  return (checkDate(game.currentDate) && ((game[key] as number) * 10).toFixed(0)) || 0;
};
const wordsData = (words: { [key: string]: number }, isAsc: boolean) => ({
  labels: Object.keys(words),
  datasets: [
    {
      fill: true,
      label: 'Кол-во слов',
      data: isAsc
        ? Object.values(words).map((item, i, arr) => item + (i && arr[i - 1]))
        : Object.values(words),
      backgroundColor: '#0288d1',
      minBarLength: 7,
    },
  ],
});

const options = (text: string) => ({
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text,
      font: {
        size: 14,
      },
    },
  },
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        display: true,
        stepSize: 5,
      },
      grid: {
        display: false,
      },
    },
  },
});

export {
  getFilteredWords,
  getTotalPercent,
  checkDate,
  wordsData,
  options,
  getAmountWords,
  getGamePercent,
};
