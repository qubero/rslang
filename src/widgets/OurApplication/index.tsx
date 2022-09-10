import { memo } from 'react';
import { motion } from 'framer-motion';
import { Box, Stack, Typography, CardMedia } from '@mui/material';

import { fadeAnimation } from 'shared/lib/styles';
import { styleIframe } from './lib/styles';

const OurApplication = () => {
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
        variants={fadeAnimation}
      >
        Наше Приложение
      </Typography>
      <Box sx={styleIframe} component={motion.div} custom={2} variants={fadeAnimation}>
        <CardMedia
          component="iframe"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          height="100%"
          frameBorder="0"
          loading="eager"
          src="https://www.youtube.com/embed/ArL2CGjGbP8"
        />
      </Box>
    </Stack>
  );
};

export default memo(OurApplication);
