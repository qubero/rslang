import { Box, Stack, Typography, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

const videoAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

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
        variants={videoAnimation}
      >
        Наше Приложение
      </Typography>
      <Box
        sx={{
          width: '95%',
          height: { xs: '60vw', xl: '40vw' },
          border: '4px solid black',
          borderRadius: '10px',
          marginY: 4,
        }}
        component={motion.div}
        custom={2}
        variants={videoAnimation}
      >
        <CardMedia
          component="iframe"
          allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          height="100%"
          frameBorder="0"
          loading="eager"
          src="https://www.youtube.com/embed/GtL1huin9EE"
        />
      </Box>
    </Stack>
  );
};

export default OurApplication;
