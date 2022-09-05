import { memo, useState } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';

import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { getAggregatedWordsFilter, useAggregatedWords } from 'widgets/UserWords';
import WordsProgress from './WordsProgress';
import WordItem from './WordItem';
import DictionaryAuth from './DictionaryAuth';

const DictionaryList = () => {
  const { isAuth } = useAuth();
  const [userId, setUserId] = useState('');
  const filter = getAggregatedWordsFilter(null, 'hard');
  const { data, isWordsLoading } = useAggregatedWords({ wordsPerPage: 3600, filter });

  if (isWordsLoading && isAuth) return <WordsProgress />;

  if (!isAuth) return <DictionaryAuth />;

  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      {data.map((item, index) => (
        <WordItem key={item.word} item={item} index={index} userId={userId} setUserId={setUserId} />
      ))}
    </Grid>
  );
};

export default memo(DictionaryList);
