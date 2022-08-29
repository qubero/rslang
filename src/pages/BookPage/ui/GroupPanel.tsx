import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { URLSearchParamsInit } from 'react-router-dom';
import { Box, Typography, Unstable_Grid2 as Grid, Button, Stack } from '@mui/material';

import { Audiotrack, ElectricBolt } from '@mui/icons-material';
import { fadeAnimation } from 'shared/lib/styles';

type IGroup = {
  color: 'success' | 'warning' | 'error' | 'info';
  value: string;
  title: string;
  subtitle: string;
};

type IGroupPanel = {
  group: string;
  setQuery: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          state?: any;
        }
      | undefined
  ) => void;
};

const groupData: IGroup[] = [
  { value: '0', color: 'success', title: 'Easy', subtitle: 'A1' },
  { value: '1', color: 'success', title: 'Easy', subtitle: 'A2' },
  { value: '2', color: 'warning', title: 'Middle', subtitle: 'B1' },
  { value: '3', color: 'warning', title: 'Middle', subtitle: 'B2' },
  { value: '4', color: 'error', title: 'Hard', subtitle: 'C1' },
  { value: '5', color: 'error', title: 'Hard', subtitle: 'C2' },
  { value: '6', color: 'info', title: 'Словарь', subtitle: '' },
];

const GroupPanel = (props: IGroupPanel) => {
  const { group, setQuery } = props;

  return (
    <Fragment>
      <Stack direction="row">
        <Stack sx={{ ml: 1, flexGrow: 1 }}>
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
        <Stack direction="row" sx={{ mr: 1 }}>
          <Button
            color={groupData[Number(group)].color}
            variant="contained"
            component={motion.button}
            variants={fadeAnimation}
            custom={3}
            sx={{ height: '50px', mr: 2 }}
          >
            <ElectricBolt color="primary" />
            <Typography variant="subtitle2" sx={{ fontSize: 20 }}>
              Спринт
            </Typography>
          </Button>
          <Button
            color={groupData[Number(group)].color}
            variant="contained"
            component={motion.button}
            variants={fadeAnimation}
            custom={3.3}
            sx={{ height: '50px', mr: 2 }}
          >
            <Audiotrack color="primary" />
            <Typography variant="subtitle2" sx={{ fontSize: 20 }}>
              Аудиовызов
            </Typography>
          </Button>
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
      <Grid container spacing={2} sx={{ width: '100%' }}>
        {groupData.map((item, i) => (
          <Grid sm={12} md={i > 3 ? 4 : 3} xl display="flex" key={item.value}>
            <Button
              onClick={() => setQuery({ group: item.value, page: '0' })}
              variant={item.value === group ? 'contained' : 'outlined'}
              color={item.color}
              value={item.value}
              component={motion.button}
              variants={fadeAnimation}
              custom={i * 0.6}
              sx={{
                width: '100%',
                flexGrow: 1,
                height: '65px',
                justifyContent: i > 5 ? 'center' : 'space-between',
              }}
            >
              <Typography variant="subtitle2" sx={{ fontSize: 20 }}>
                {item.title}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  fontSize: 30,
                  color: item.value === group ? 'black' : 'inherit',
                }}
              >
                {item.subtitle}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default GroupPanel;
