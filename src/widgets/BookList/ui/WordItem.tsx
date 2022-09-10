import { memo } from 'react';
import { Image } from 'mui-image';
import { motion } from 'framer-motion';
import { Unstable_Grid2 as Grid, Card, CardContent } from '@mui/material';

import { IWord } from 'shared/api/lib/types';
import { API_URL } from 'shared/api/model/constants';
import { fadeAnimation, slideAnimation } from 'shared/lib/styles';
import { useQueryParams } from 'widgets/BookHeader/model/hooks/useQuery';
import { cardWordStyle } from '../lib/styles';
import WordContent from './WordContent';
import WordHeader from './WordHeader';

type IWordItem = {
  item: IWord;
  index: number;
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
};

const WordItem = ({ item, index, userId, setUserId }: IWordItem) => {
  const { group } = useQueryParams();

  return (
    <Grid md={12} xl={6} display="flex" key={item.word} justifyContent="center">
      <Card
        key={item.word}
        sx={cardWordStyle(item)}
        component={motion.div}
        variants={group === '6' ? fadeAnimation : slideAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
        custom={index * 0.7}
      >
        <Image src={`${API_URL}${item.image}`} alt="img" duration={500} width={'300px'} />
        <CardContent sx={{ width: '100%', minHeight: '300px' }}>
          <WordHeader item={item} userId={userId} setUserId={setUserId} />
          <WordContent item={item} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default memo(WordItem);
