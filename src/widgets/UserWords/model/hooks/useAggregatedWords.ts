import { useLayoutEffect, useRef, useState } from 'react';
import { useGetAggregatedWordsQuery } from 'shared/api';
import { IAggregatedWordsResponse, IWord } from 'shared/api/lib/types';
import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { MIN_WORDS_FOR_GAME_COUNT } from 'widgets/Games';
import { IUseWordsParams } from 'widgets/UserWords/lib/types';

const normalizeWords = (data: IAggregatedWordsResponse[]) => {
  return data ? data[0].paginatedResults.map((w) => ({ ...w, id: w._id })) : [];
};

const useAggregatedWords = (params: IUseWordsParams) => {
  const { isAuth, auth } = useAuth();
  const [isReady, setIsReady] = useState(false);

  const wordsRef = useRef<IWord[]>([]);

  const wordsQuery = useGetAggregatedWordsQuery(
    { auth, params },
    {
      skip: !isAuth,
      selectFromResult: ({ data, isFetching, isLoading, isSuccess, isError }) => ({
        words: data ? normalizeWords(data) : [],
        isWordsLoading: isFetching || isLoading,
        isLoadedOnce: isSuccess,
        isFetchError: isError,
      }),
    }
  );

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
  };
};

export default useAggregatedWords;
