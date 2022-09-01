import { Stack, Typography } from '@mui/material';
import { Fragment, memo } from 'react';
import { IWord } from 'shared/api/lib/types';

const WordContent = ({ item }: { item: IWord }) => {
  return (
    <Fragment>
      <Stack sx={{ mt: 1, fontSize: 16 }}>
        <div dangerouslySetInnerHTML={{ __html: item.textMeaning }}></div>
        <Typography color="text.secondary" sx={{ fontSize: 16 }}>
          {item.textMeaningTranslate}
        </Typography>
      </Stack>
      <Stack sx={{ mt: 2, fontSize: 16 }}>
        <div dangerouslySetInnerHTML={{ __html: item.textExample }}></div>
        <Typography color="text.secondary" sx={{ fontSize: 16 }}>
          {item.textExampleTranslate}
        </Typography>
      </Stack>
    </Fragment>
  );
};

export default memo(WordContent);
