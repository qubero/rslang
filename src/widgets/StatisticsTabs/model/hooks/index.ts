import { getFilteredWords } from 'widgets/StatisticsTabs/lib/util';
import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { useGetStatisticsQuery, useUpdateStatisticsMutation } from 'shared/api';
import { IGameStatistic, IStatistic, IUserWord } from 'shared/api/lib/types';
import { getDate } from 'shared/lib/utils';

const useUserStatistics = () => {
  const [updateStats] = useUpdateStatisticsMutation();
  const { isAuth, auth } = useAuth();
  const currentDate = getDate();
  const skip = !isAuth;
  const {
    stats: { optional, learnedWords },
    isLoadStatistics,
  } = useGetStatisticsQuery(auth, {
    skip,
    selectFromResult: ({ data, isFetching }) => ({
      stats: data ?? ({} as IStatistic),
      isLoadStatistics: isFetching,
    }),
  });

  const updateWordsStats = (words: IUserWord[]) => {
    if (skip) return;
    const famousWords = { ...optional.famousWords };
    const filteredWords = words.filter(getFilteredWords);
    famousWords[currentDate] = filteredWords.length;
    updateStats({ ...auth, body: { learnedWords, optional: { ...optional, famousWords } } });
  };

  const updateGameStats = (game: 'sprint' | 'audiocall', gameStats: IGameStatistic) => {
    if (skip) return;
    const newOptional = { ...optional };
    const newWords = { ...newOptional.newWords };
    const { newWordsCount, successCount, successStreak } = newOptional[game];
    const { newWordsCount: words, successCount: count, successStreak: streak } = gameStats;

    if (newOptional[game].currentDate !== currentDate) {
      newOptional[game] = gameStats;
    } else {
      newOptional[game] = {
        currentDate,
        newWordsCount: newWordsCount + words,
        successCount: successCount ? +(successCount + count).toFixed(1) / 2 : count,
        successStreak: Math.max(successStreak, streak),
      };
    }
    newWords[currentDate] = (newWords[currentDate] || 0) + words;
    updateStats({ ...auth, body: { learnedWords, optional: { ...newOptional, newWords } } });
  };
  return { updateWordsStats, updateGameStats, isLoadStatistics };
};

export { useUserStatistics };
