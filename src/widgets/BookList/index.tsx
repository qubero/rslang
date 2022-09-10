import { memo, useState } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';

import { IWord } from 'shared/api/lib/types';
import { useAppSelector } from 'shared/store/model/hooks';
import ProgressBar from 'shared/ui/ProgressBar';
import WordItem from './ui/WordItem';

type IWordsList = { words: IWord[] | undefined; load: boolean };

const WordsList = (props: IWordsList) => {
  const { words, load } = props;
  const [userId, setUserId] = useState('');
  const loading = useAppSelector((state) => state.bookSlice.loading);

  if (load && loading) return <ProgressBar />;

  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      {words &&
        words.map((item, index) => (
          <WordItem
            key={item.word}
            item={item}
            index={index}
            userId={userId}
            setUserId={setUserId}
          />
        ))}
    </Grid>
  );
};

export default memo(WordsList);
