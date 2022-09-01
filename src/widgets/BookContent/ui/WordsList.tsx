import { memo, useState } from 'react';
import { Unstable_Grid2 as Grid } from '@mui/material';

import { IWord } from 'shared/api/lib/types';
import WordItem from './WordItem';

type IWordsList = { words: IWord[] | undefined };

const WordsList = (props: IWordsList) => {
  const { words } = props;
  const [userId, setUserId] = useState('');

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
