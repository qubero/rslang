import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Audiotrack, ElectricBolt } from '@mui/icons-material';

import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { fadeAnimation } from 'shared/lib/styles';
import { useGetStatisticsQuery } from 'shared/api';
import { IStatistic } from 'shared/api/lib/types';
import { getDate } from 'shared/lib/utils';
import { checkDate, getTotalPercent } from '../lib/util';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: 180,
  lineHeight: '60px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const StatisticsItems = () => {
  const { auth, isAuth } = useAuth();
  const { data = {} as IStatistic } = useGetStatisticsQuery(auth, { skip: !isAuth });
  const {
    optional: { newWords, famousWords, sprint, audiocall },
  } = data;
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
              <Box
                sx={{
                  pl: 2,
                  borderLeft: '4px solid #0288d1',
                  textAlign: 'start',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
                >
                  Спринт <ElectricBolt color="info" fontSize="large" />
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Новых слов: {(checkDate(sprint.currentDate) && sprint.newWordsCount) || 0}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Правильных ответов:{' '}
                  {(checkDate(sprint.currentDate) && (sprint.successCount * 10).toFixed(0)) || 0}%
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Самая длинная серия правильных ответов:{' '}
                  {(checkDate(sprint.currentDate) && sprint.successStreak) || 0}
                </Typography>
              </Box>
            </Item>
            <Item elevation={2} sx={{ height: '50%', pl: 4, alignItems: 'flex-start' }}>
              <Box
                sx={{
                  pl: 2,
                  borderLeft: '4px solid #ed6c02',
                  textAlign: 'start',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
                >
                  Аудиовызов <Audiotrack color="warning" fontSize="large" />
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Новых слов: {(checkDate(audiocall.currentDate) && audiocall.newWordsCount) || 0}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Правильных ответов:{' '}
                  {(checkDate(audiocall.currentDate) && (audiocall.successCount * 10).toFixed(0)) ||
                    0}
                  %
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Самая длинная серия правильных ответов:{' '}
                  {(checkDate(audiocall.currentDate) && audiocall.successStreak) || 0}
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
