import { memo, useState } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';

import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { getAggregatedWordsFilter, useAggregatedWords } from 'widgets/UserWords';
import { useAppSelector } from 'shared/store/model/hooks';
import AuthNotification from 'shared/ui/AuthNotification';
import ProgressBar from 'shared/ui/ProgressBar';
import WordItem from 'widgets/BookList/ui/WordItem';

const DictionaryList = () => {
  const { isAuth } = useAuth();
  const [userId, setUserId] = useState('');
  const filter = getAggregatedWordsFilter(null, 'hard');
  const { data, isWordsLoading } = useAggregatedWords({ wordsPerPage: 3600, filter });
  const loading = useAppSelector((state) => state.bookSlice.loading);

  if (isWordsLoading && isAuth && loading) return <ProgressBar />;

  if (!isAuth) return <AuthNotification />;

  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      {data.map((item, index) => (
        <WordItem key={item.word} item={item} index={index} userId={userId} setUserId={setUserId} />
      ))}
    </Grid>
  );
};

export default memo(DictionaryList);
