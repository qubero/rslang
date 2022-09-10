import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Audiotrack, ElectricBolt } from '@mui/icons-material';

import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { fadeAnimation } from 'shared/lib/styles';
import { useGetStatisticsQuery } from 'shared/api';
import { IStatistic } from 'shared/api/lib/types';
import { getDate } from 'shared/lib/utils';
import { getAmountWords, getGamePercent, getTotalPercent } from '../lib/util';
import { layoutAudiocall, layoutSprint, gameHeader } from '../model/constants';
import { Item } from '../lib/styles';

const StatisticsItems = () => {
  const { auth, isAuth } = useAuth();
  const { data = {} as IStatistic } = useGetStatisticsQuery(auth, { skip: !isAuth });
  const { optional } = data;
  const { newWords, famousWords, sprint, audiocall } = optional;
  const currentDate = getDate();

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center' }}
      component={motion.div}
      variants={fadeAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Grid container spacing={2} sx={{ width: { md: '600px', lg: '800px' } }}>
        <Grid xs={4}>
          <Stack spacing={2}>
            <Item elevation={2}>
              <Typography variant="h2" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
                {newWords[currentDate] || 0}
              </Typography>
              <Typography variant="subtitle2">новых слов</Typography>
            </Item>
            <Item elevation={2}>
              <Typography variant="h2" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
                {famousWords[currentDate] || 0}
              </Typography>
              <Typography variant="subtitle2">изученых слов</Typography>
            </Item>
            <Item elevation={2}>
              <Typography variant="h2" sx={{ fontWeight: 'bold', lineHeight: 1 }}>
                {getTotalPercent(sprint.successCount, audiocall.successCount)}%
              </Typography>
              <Typography variant="subtitle2">правильных ответов</Typography>
            </Item>
          </Stack>
        </Grid>
        <Grid xs={8}>
          <Stack spacing={2} sx={{ height: '100%' }}>
            <Item elevation={2} sx={{ height: '50%', pl: 4, alignItems: 'flex-start' }}>
              <Box sx={layoutSprint}>
                <Typography variant="h4" sx={gameHeader}>
                  Спринт <ElectricBolt color="info" fontSize="large" />
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Новых слов: {getAmountWords(sprint, 'newWordsCount')}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Правильных ответов: {getGamePercent(sprint, 'successCount')}%
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Самая длинная серия верных ответов: {getAmountWords(sprint, 'successStreak')}
                </Typography>
              </Box>
            </Item>
            <Item elevation={2} sx={{ height: '50%', pl: 4, alignItems: 'flex-start' }}>
              <Box sx={layoutAudiocall}>
                <Typography variant="h4" sx={gameHeader}>
                  Аудиовызов <Audiotrack color="warning" fontSize="large" />
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Новых слов: {getAmountWords(audiocall, 'newWordsCount')}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Правильных ответов: {getGamePercent(audiocall, 'successCount')}%
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Самая длинная серия верных ответов: {getAmountWords(audiocall, 'successStreak')}
                </Typography>
              </Box>
            </Item>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
export default StatisticsItems;
