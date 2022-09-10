import { Fragment, memo } from 'react';

import DictionaryList from 'widgets/DictionaryList';
import WordsLearned from '../../shared/ui/LearnedNotification';
import WordsList from '../BookList';
import WordsPagination from './ui/WordsPagination';
import { useWordsPanel } from './model/hooks';

const WordsPanel = () => {
  const { data, userData, isLoad, isFetching, group, isAuth, learn } = useWordsPanel();

  return (
    <Fragment>
      <WordsPagination learn={learn} />
      {learn && <WordsLearned />}
      {group === '6' ? (
        <DictionaryList />
      ) : (
        <WordsList words={isAuth ? userData : data} load={isAuth ? isLoad : isFetching} />
      )}
    </Fragment>
  );
};

export default memo(WordsPanel);
