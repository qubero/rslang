import { memo } from 'react';
import { motion } from 'framer-motion';
import { Stack, Typography } from '@mui/material';

import { slideAnimation } from 'shared/lib/styles';
import { teamData } from './model/data';
import PersonCard from './ui/PersonCard';

const OurTeam = () => {
  return (
    <Stack
      sx={{ marginY: 4, justifyContent: 'center', alignItems: 'center' }}
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold' }}
        component={motion.h4}
        variants={slideAnimation}
      >
        Наша Команда
      </Typography>
      <Stack spacing={4} sx={{ marginY: 4, justifyContent: 'center', alignItems: 'center' }}>
        {teamData.map((person, index) => (
          <PersonCard
            key={person.title}
            {...person}
            index={index}
            slideAnimation={slideAnimation}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default memo(OurTeam);
