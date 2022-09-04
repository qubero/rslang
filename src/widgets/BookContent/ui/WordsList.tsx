import { memo, useState } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';

import { IWord } from 'shared/api/lib/types';
import WordItem from './WordItem';
import WordsProgress from './WordsProgress';

type IWordsList = { words: IWord[] | undefined; load: boolean };

const WordsList = (props: IWordsList) => {
  const { words, load } = props;
  const [userId, setUserId] = useState('');

  if (load) return <WordsProgress />;
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
