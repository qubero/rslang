import { useMemo, useEffect } from 'react';

import { useGetStatisticsQuery, useGetWordsQuery } from 'shared/api';
import { useAppDispatch } from 'shared/store/model/hooks';
import { setLearning } from 'shared/store/slices/bookSlice';
import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { useQueryParams } from 'widgets/BookHeader/model/hooks/useQuery';
import { MIN_WORDS_FOR_GAME_COUNT } from 'widgets/Games';
import { getAggregatedWordsFilter, useAggregatedWords } from 'widgets/UserWords';

const useWordsPanel = () => {
  const { isAuth, auth } = useAuth();
  const { group, page } = useQueryParams();
  const dispatch = useAppDispatch();
  const params = { page: Number(page), group: Number(group) };
  const filter = getAggregatedWordsFilter(params);
  const filterParams = { wordsPerPage: MIN_WORDS_FOR_GAME_COUNT, filter };
  useGetStatisticsQuery(auth, { skip: !isAuth });

  const { data, isFetching } = useGetWordsQuery(params, { skip: isAuth });
  const { data: userData, isWordsLoading: isLoad } = useAggregatedWords(filterParams);
  const learn = useMemo(
    () =>
      userData.filter(
        ({ userWord }) => userWord?.optional.isLearned || userWord?.difficulty === 'hard'
      ).length === MIN_WORDS_FOR_GAME_COUNT,
    [userData]
  );

  useEffect(() => {
    dispatch(setLearning(learn));
  }, [dispatch, learn]);

  return { data, userData, isLoad, isFetching, group, isAuth, learn };
};

export { useWordsPanel };
