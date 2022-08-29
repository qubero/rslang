import { memo, useState } from 'react';
import {
  Unstable_Grid2 as Grid,
  Card,
  CardContent,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Image } from 'mui-image';
import { Add } from '@mui/icons-material';
import { API_URL } from 'shared/api/model/constants';
import { slideAnimation } from 'shared/lib/styles';
import { IWord } from 'shared/api/lib/types';
import { getAuthHeaders } from 'shared/api/lib/util';
import { themeColor } from '../lib/styles';
import SoundBtn from './SoundBtn';

type WordsListProps = {
  words: IWord[] | undefined;
  group: string;
};

const WordsList = (props: WordsListProps) => {
  const { words, group } = props;
  const [userId, setUserId] = useState('');

  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      {words &&
        words.map((item, index) => (
          <Grid md={12} xl={6} display="flex" key={item.word} justifyContent="center">
            <Card
              key={item.word}
              sx={{ maxWidth: 700, display: 'flex', flexDirection: 'row', flexGrow: 1 }}
              component={motion.div}
              variants={slideAnimation}
              initial="hidden"
              animate="visible"
              exit="hidden"
              custom={index * 0.7}
            >
              <Image src={`${API_URL}${item.image}`} alt="img" duration={500} width={'300px'} />
              <CardContent sx={{ width: '100%', minHeight: '300px' }}>
                <Stack sx={{ borderLeft: `3px solid #${themeColor[Number(group)]}`, pl: 2 }}>
                  <Stack direction={'row'} spacing={1} sx={{ alignItems: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}
                    >
                      {item.word}
                    </Typography>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: '400' }}>
                      {item.transcription}
                    </Typography>
                    {/*
                    <AddWord/> */}
                    <SoundBtn
                      group={group}
                      id={item.id}
                      userId={userId}
                      setUserId={setUserId}
                      srcAudio={item.audio}
                      srcMeaning={item.audioMeaning}
                      srcExample={item.audioExample}
                    />
                  </Stack>
                  <Typography variant="body1" color="text.secondary">
                    {item.wordTranslate}
                  </Typography>
                </Stack>
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
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default memo(WordsList);
