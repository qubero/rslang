import { memo } from 'react';
import { ElectricBolt, Audiotrack } from '@mui/icons-material';
import { Stack, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import { fadeAnimation } from 'shared/lib/styles';
import { ROUTE_PATH } from 'shared/constants';
import { useAppSelector } from 'shared/store/model/hooks';
import { groupData } from '../model/constants';
import { useQueryParams } from '../model/hooks/useQuery';

const GroupHeader = () => {
  const { group, page } = useQueryParams();
  const isLearning = useAppSelector((state) => state.bookSlice.learned);

  const linkBtn = (path: string, custom: number, name: string) => (
    <NavLink
      to={`/${path}`}
      className={`navLink${isLearning || group === '6' ? ' disabled-link' : ''}`}
      state={{ group, page }}
    >
      <Button
        color={groupData[Number(group)].color}
        variant="contained"
        component={motion.button}
        variants={fadeAnimation}
        custom={custom}
        sx={{ height: '65px', mr: 2, width: '100%' }}
        disabled={isLearning || group === '6'}
      >
        <ElectricBolt color="primary" />
        <Typography variant="subtitle2" sx={{ fontSize: 20 }}>
          {name}
        </Typography>
      </Button>
    </NavLink>
  );

  return (
    <Stack direction={{ xs: 'column-reverse', md: 'row' }}>
      <Stack sx={{ ml: 1, flexGrow: 1, mt: { xs: 1, md: 0 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold' }}
          component={motion.h4}
          variants={fadeAnimation}
        >
          Учебник
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          component={motion.div}
          variants={fadeAnimation}
        >
          Градация сложности
        </Typography>
      </Stack>
      <Stack
        spacing={1}
        direction={{ xs: 'column-reverse', md: 'row' }}
        sx={{ marginX: 1, alignItems: { xs: 'stretch', md: 'center' } }}
      >
        {linkBtn(ROUTE_PATH.SPRINT, 3, 'Спринт')}
        {linkBtn(ROUTE_PATH.AUDIOCALL, 3.3, 'Аудиовызов')}
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold' }}
          component={motion.h4}
          variants={fadeAnimation}
          custom={3.6}
        >
          Игры
        </Typography>
      </Stack>
    </Stack>
  );
};

export default memo(GroupHeader);
