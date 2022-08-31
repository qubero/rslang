import { Dispatch, Fragment, memo, SetStateAction, useLayoutEffect } from 'react';

import { useAggregatedWords, getAggregatedWordsFilter } from 'widgets/UserWords';
import { MIN_WORDS_FOR_GAME_COUNT } from 'widgets/Games';
import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { useQueryParams } from 'widgets/BookHeader/model/hooks/useQuery';
import { useGetWordsQuery } from 'shared/api';

import DictionaryList from './ui/DictionaryList';
import WordsLearned from './ui/WordsLearned';
import WordsList from './ui/WordsList';
import WordsPagination from './ui/WordsPagination';

type IWordsPanel = { setLearning: Dispatch<SetStateAction<boolean>> };

const WordsPanel = ({ setLearning }: IWordsPanel) => {
  const { isAuth } = useAuth();
  const { group, page } = useQueryParams();
  const params = { page: Number(page), group: Number(group) };
  const filter = getAggregatedWordsFilter(params);
  const filterParams = { wordsPerPage: MIN_WORDS_FOR_GAME_COUNT, filter };

  const { data } = useGetWordsQuery(params, { skip: isAuth });
  const { data: userData } = useAggregatedWords(filterParams);

  const learn = userData.filter((item) => item.userWord).length === MIN_WORDS_FOR_GAME_COUNT;
  console.log('render');
  useLayoutEffect(() => {
    if (learn) {
      setLearning(true);
    } else {
      setLearning(false);
    }
  }, [learn, setLearning]);

  return (
    <Fragment>
      <WordsPagination learn={learn} />
      {learn && <WordsLearned />}
      {group === '6' ? <DictionaryList /> : <WordsList words={isAuth ? userData : data} />}
    </Fragment>
  );
};

export default memo(WordsPanel);
