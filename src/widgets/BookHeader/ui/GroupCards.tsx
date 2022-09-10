import { memo } from 'react';
import { Unstable_Grid2 as Grid, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { fadeAnimation } from 'shared/lib/styles';
import { useAppDispatch } from 'shared/store/model/hooks';
import { setLoading } from 'shared/store/slices/bookSlice';
import { groupData } from '../model/constants';
import { useQueryParams } from '../model/hooks/useQuery';
import { btnCardStyle } from '../lib/styles';

const GroupCards = () => {
  const { group, setQuery } = useQueryParams();
  const dispatch = useAppDispatch();

  return (
    <Grid container spacing={2} sx={{ width: '100%' }}>
      {groupData.map((item, i) => (
        <Grid sm={12} md={i > 3 ? 4 : 3} xl display="flex" key={item.value}>
          <Button
            onClick={() => {
              setQuery({ group: item.value, page: '0' });
              dispatch(setLoading(true));
            }}
            variant={item.value === group ? 'contained' : 'outlined'}
            color={item.color}
            value={item.value}
            component={motion.button}
            variants={fadeAnimation}
            custom={i * 0.7}
            sx={btnCardStyle(i)}
          >
            <Typography variant="subtitle2" sx={{ fontSize: 20 }}>
              {item.title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ fontSize: 30, color: item.value === group ? 'black' : 'inherit' }}
            >
              {item.subtitle}
            </Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(GroupCards);
