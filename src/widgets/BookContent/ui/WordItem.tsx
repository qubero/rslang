import { memo } from 'react';
import { Image } from 'mui-image';
import { motion } from 'framer-motion';
import { Unstable_Grid2 as Grid, Card, CardContent } from '@mui/material';

import { IWord } from 'shared/api/lib/types';
import { API_URL } from 'shared/api/model/constants';
import { fadeAnimation, slideAnimation } from 'shared/lib/styles';
import { useQueryParams } from 'widgets/BookHeader/model/hooks/useQuery';
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
        sx={{
          maxWidth: { md: 1000, xl: 700 },
          display: 'flex',
          flexDirection: 'row',
          flexGrow: 1,
          background: (item.userWord?.difficulty === 'hard' && '#d32f2f46') || 'inherit',
          boxShadow: item.userWord?.optional.isLearned
            ? 'inset 0px 0px 0px 3px #2e7d32'
            : '0px 2px 1px -1px #00000033, 0px 1px 1px 0px #00000024, 0px 1px 3px 0px #0000001f',
        }}
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
