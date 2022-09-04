import { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import WordsProgress from 'widgets/BookContent/ui/WordsProgress';
import DictionaryAuth from 'widgets/BookContent/ui/DictionaryAuth';
import { useGetUserWordsQuery } from 'shared/api';
import { fadeAnimation } from 'shared/lib/styles';
import StatisticsItems from './ui/StatisticsItems';
import StatisticsCharts from './ui/StatisticsCharts';
import { useUserStatistics } from './model/hooks';

const StatisticsTabs = () => {
  const [value, setValue] = useState('1');
  const { auth, isAuth } = useAuth();
  const { updateWordsStats, isLoadStatistics } = useUserStatistics();
  const { data: words = [], isFetching } = useGetUserWordsQuery(auth, { skip: !isAuth });
  useEffect(() => {
    if (!isLoadStatistics && !isFetching && isAuth) {
      updateWordsStats(words);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
