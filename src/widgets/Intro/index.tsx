import { Image } from 'mui-image';
import { Box, Button, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const Intro = () => {
  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      spacing={4}
      sx={{ height: '90vh', marginY: 4, justifyContent: 'center', alignItems: 'center' }}
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Stack spacing={2} sx={{ maxWidth: '360px', alignItems: 'start' }}>
        <Typography
          variant="h3"
          component={motion.h3}
          variants={textAnimation}
          custom={1}
          sx={{ fontWeight: 'bold' }}
        >
          RSLang
        </Typography>
        <Typography variant="body1" component={motion.div} variants={textAnimation} custom={2}>
          Бесплатный, веселый и эффективный способ выучить язык, скорее же присоединяйтесь к нам.
        </Typography>
        <Button
          variant="contained"
          sx={{ color: '#FDF500' }}
          component={motion.button}
          variants={textAnimation}
          custom={3}
        >
          Начать
        </Button>
      </Stack>
      <Box component={motion.div} variants={textAnimation} custom={1}>
        <Image
          src={`https://via.placeholder.com/500`}
          alt="img"
          duration={0}
          height="100%"
          width="100%"
        />
      </Box>
    </Stack>
  );
};

export default Intro;
