import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeAnimation } from 'shared/lib/styles';

import StatisticsTabs from 'widgets/StatisticsTabs/StatisticsTabs';

const StatisticsPage = () => (
  <Stack
    component={motion.section}
    spacing={1}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    sx={{ mt: 3 }}
  >
    <Typography
      variant="h4"
      sx={{ fontWeight: 'bold', ml: 1 }}
      component={motion.h4}
      variants={fadeAnimation}
    >
      Статистика
    </Typography>
    <StatisticsTabs />
  </Stack>
);

export default StatisticsPage;
