import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { fadeAnimation, motionSettings } from 'shared/lib/styles';
import { Wrapper } from 'shared/ui/Wrapper';

import StatisticsTabs from 'widgets/StatisticsTabs/StatisticsTabs';
const HeaderStyle = { fontWeight: 'bold', ml: 1 };

const StatisticsPage = () => (
  <Wrapper>
    <Stack component={motion.section} spacing={1} {...motionSettings} sx={{ mt: 3 }}>
      <Typography variant="h4" sx={HeaderStyle} component={motion.h4} variants={fadeAnimation}>
        Статистика
      </Typography>
      <StatisticsTabs />
    </Stack>
  </Wrapper>
);

export default StatisticsPage;
