import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { useLayoutEffect, useRef, useState } from 'react';
import { useGetAggregatedWordsQuery } from 'shared/api';
import { IAggregatedWordsResponse, IWord } from 'shared/api/lib/types';
import { STORAGE_AUTH_USER } from 'shared/constants';
import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { MIN_WORDS_FOR_GAME_COUNT } from 'widgets/Games';
import { IUseWordsParams } from 'widgets/UserWords/lib/types';

const normalizeWords = (data: IAggregatedWordsResponse[]) => {
  return data ? data[0].paginatedResults.map((w) => ({ ...w, id: w._id, answered: false })) : [];
};

const useAggregatedWords = (params: IUseWordsParams) => {
  const { isAuth, auth } = useAuth();
  const [isReady, setIsReady] = useState(false);

  const wordsRef = useRef<IWord[]>([]);

  const wordsQuery = useGetAggregatedWordsQuery(
    { auth, params },
    {
      skip: !isAuth,
      selectFromResult: ({ data, isFetching, isLoading, isSuccess, isError, error }) => ({
        words: data ? normalizeWords(data) : [],
        isWordsLoading: isFetching || isLoading,
        isLoadedOnce: isSuccess,
        isFetchError: isError,
        isFailedLoad: error as FetchBaseQueryError,
      }),
    }
  );

  if (
    wordsQuery.isFailedLoad &&
    wordsQuery.isFailedLoad.status === 'PARSING_ERROR' &&
    wordsQuery.isFailedLoad.originalStatus === 401
  ) {
    localStorage.setItem(STORAGE_AUTH_USER, JSON.stringify(null));
    window.location.reload();
  }

  useLayoutEffect(() => {
    const { words, isWordsLoading, isLoadedOnce } = wordsQuery;

    if (!isReady && !isWordsLoading && isLoadedOnce) {
      wordsRef.current = [...wordsRef.current, ...words].slice(0, MIN_WORDS_FOR_GAME_COUNT);
      setIsReady(true);
    }
  }, [isReady, wordsQuery]);

  return {
    isReady,
    isError: wordsQuery.isFetchError,
    words: wordsRef.current,
    data: wordsQuery.words,
    isWordsLoading: wordsQuery.isWordsLoading,
  };
};

export default useAggregatedWords;
