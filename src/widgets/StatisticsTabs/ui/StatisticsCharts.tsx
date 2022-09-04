import { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { Stack } from '@mui/material';

import useAuth from 'widgets/Authorization/model/hooks/useAuth';
import { useGetStatisticsQuery } from 'shared/api';
import { IStatistic } from 'shared/api/lib/types';
import { options, wordsData } from '../lib/util';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

type IChartData = {
  labels: string[];
  datasets: {
    fill: boolean;
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
};

const StatisticsCharts = () => {
  const { auth, isAuth } = useAuth();
  const [barData, setBarData] = useState<IChartData>({ labels: [], datasets: [] });
  const [areaData, setAreaData] = useState<IChartData>({ labels: [], datasets: [] });
  const { data = {} as IStatistic } = useGetStatisticsQuery(auth, { skip: !isAuth });
  const {
    optional: { newWords, famousWords },
  } = data;

  useEffect(() => {
    setBarData(wordsData(newWords, false));
    setAreaData(wordsData(famousWords, true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack spacing={2} sx={{ width: { xs: '500px', lg: '600px' }, m: 'auto' }}>
      <Bar data={barData} options={options('Новые слова по дням')} />
      <Line data={areaData} options={options('Изученые слова за все время')} />
    </Stack>
  );
};

export default StatisticsCharts;
