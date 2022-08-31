import { memo } from 'react';
import { Unstable_Grid2 as Grid, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import { fadeAnimation } from 'shared/lib/styles';
import { groupData } from '../model/constants';
import { useQueryParams } from '../model/hooks/useQuery';

const GroupCards = () => {
  const { group, setQuery } = useQueryParams();

  return (
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
  );
};

export default memo(GroupCards);
