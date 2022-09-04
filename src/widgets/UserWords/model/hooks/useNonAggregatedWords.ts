import { useLayoutEffect, useRef, useState } from 'react';
import { useGetWordsQuery } from 'shared/api';
import { IWord } from 'shared/api/lib/types';
import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { IGameSettings, MIN_WORDS_FOR_GAME_COUNT, PAGE_PER_GROUP_COUNT } from 'widgets/Games';

const useNonAggregatedWords = (initSettings: IGameSettings) => {
  const { isAuth } = useAuth();

  const [isReady, setIsReady] = useState(false);
  const [settings, setSettings] = useState(initSettings);

  const wordsQuery = useGetWordsQuery(settings, {
    skip: isAuth,
    selectFromResult: ({ data, isFetching, isLoading, isSuccess, isError }) => ({
      words: data?.map((w) => ({ ...w, answered: false })) || [],
      isWordsLoading: isFetching || isLoading,
      isLoadedOnce: isSuccess,
      isFetchError: isError,
    }),
  });

  const wordsRef = useRef<IWord[]>([]);

  useLayoutEffect(() => {
    const { words, isWordsLoading, isLoadedOnce } = wordsQuery;

    if (!isReady && !isWordsLoading && isLoadedOnce) {
      const { group, page } = settings;
      wordsRef.current = [...wordsRef.current, ...words].slice(0, MIN_WORDS_FOR_GAME_COUNT);

      if (group === 0 && page === 0) {
        setIsReady(true);
        return;
      }

      if (wordsRef.current.length < MIN_WORDS_FOR_GAME_COUNT) {
        const newPage = page > 0 ? page - 1 : PAGE_PER_GROUP_COUNT;
        const newGroup = newPage === PAGE_PER_GROUP_COUNT && group > 0 ? group - 1 : group;
        const newSettings = { group: newGroup, page: newPage };

        setSettings((prev) => ({ ...prev, ...newSettings }));
      } else {
        setIsReady(true);
      }
    }
  }, [settings, isReady, wordsQuery]);

  return {
    isReady,
    isError: wordsQuery.isFetchError,
    words: wordsRef.current,
  };
};

export default useNonAggregatedWords;
