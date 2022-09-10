import { Fragment } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import WordsProgress from 'shared/ui/ProgressBar';
import DictionaryAuth from 'shared/ui/AuthNotification';
import { fadeAnimation } from 'shared/lib/styles';
import StatisticsItems from './ui/StatisticsItems';
import StatisticsCharts from './ui/StatisticsCharts';
import { useStatisticsTabs } from './model/hooks';

const StatisticsTabs = () => {
  const { value, setValue, isAuth, isFetching, isLoadStatistics } = useStatisticsTabs();

  if (!isAuth) return <DictionaryAuth />;

  if (isFetching || isLoadStatistics) return <WordsProgress />;

  return (
    <Fragment>
      <Box
        sx={{ width: '100%', typography: 'body1', pl: 1 }}
        component={motion.div}
        variants={fadeAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
        custom={1.5}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={(e, newValue) => setValue(newValue)}>
              <Tab label="Сегодня" value="1" sx={{ borderRadius: 1, p: 0 }} />
              <Tab label="Весь период" value="2" sx={{ borderRadius: 1 }} />
            </TabList>
          </Box>

          <TabPanel value="1">
            <StatisticsItems />
          </TabPanel>
          <TabPanel value="2">
            <StatisticsCharts />
          </TabPanel>
        </TabContext>
      </Box>
    </Fragment>
  );
};
export default StatisticsTabs;
