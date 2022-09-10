import { useState, useEffect } from 'react';

import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { getFilteredWords } from 'widgets/StatisticsTabs/lib/util';
import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { getDate } from 'shared/lib/utils';
import { IGameStatistic, IStatistic, IUserWord } from 'shared/api/lib/types';
import { STORAGE_AUTH_USER } from 'shared/constants';
import {
  useGetStatisticsQuery,
  useGetUserWordsQuery,
  useUpdateStatisticsMutation,
} from 'shared/api';

const useUserStatistics = () => {
  const [updateStats] = useUpdateStatisticsMutation();
  const { isAuth, auth } = useAuth();
  const currentDate = getDate();
  const skip = !isAuth;
  const {
    stats: { optional, learnedWords },
    isLoadStatistics,
    isFailedLoad,
  } = useGetStatisticsQuery(auth, {
    skip,
    selectFromResult: ({ data, isFetching, error }) => ({
      stats: data ?? ({} as IStatistic),
      isLoadStatistics: isFetching,
      isFailedLoad: error as FetchBaseQueryError,
    }),
  });

  if (
    isFailedLoad &&
    isFailedLoad.status === 'PARSING_ERROR' &&
    isFailedLoad.originalStatus === 401
  ) {
    localStorage.setItem(STORAGE_AUTH_USER, JSON.stringify(null));
    window.location.reload();
  }

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

const useStatisticsTabs = () => {
  const [value, setValue] = useState('1');
  const { auth, isAuth } = useAuth();
  const { updateWordsStats, isLoadStatistics } = useUserStatistics();
  const { data: words = [], isFetching } = useGetUserWordsQuery(auth, { skip: !isAuth });
  useEffect(() => {
    if (!isLoadStatistics && !isFetching && isAuth) {
      updateWordsStats(words);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { value, setValue, isAuth, isFetching, isLoadStatistics };
};

export { useUserStatistics, useStatisticsTabs };
