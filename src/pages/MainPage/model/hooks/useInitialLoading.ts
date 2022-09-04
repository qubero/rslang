import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { getAggregatedWordsFilter, useAggregatedWords } from 'widgets/UserWords';
import { MIN_WORDS_FOR_GAME_COUNT } from 'widgets/Games';
import { useGetWordsQuery, useGetUserWordsQuery, useGetStatisticsQuery } from 'shared/api';

const useInitialLoading = () => {
  const { auth, isAuth } = useAuth();
  const params = { page: 0, group: 0 };
  const filter = getAggregatedWordsFilter(params);
  const filterParams = { wordsPerPage: MIN_WORDS_FOR_GAME_COUNT, filter };

  const {} = useAggregatedWords(filterParams);
  const {} = useGetWordsQuery(params, { skip: isAuth });
  const {} = useGetStatisticsQuery(auth, { skip: !isAuth });
  const {} = useGetUserWordsQuery(auth, { skip: !isAuth });
};

export { useInitialLoading };
