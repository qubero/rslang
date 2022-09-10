import { memo } from 'react';
import { motion } from 'framer-motion';
import {
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

import { fadeAnimation } from 'shared/lib/styles';
import { cardData } from './model/data';

const OurAbility = () => {
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
        Наши возможности
      </Typography>
      <Grid container spacing={3} sx={{ marginY: 4, width: { md: 650, xl: '100%' } }}>
        {cardData.map((card, i) => (
          <Grid sm={12} md={6} xl={3} display="flex" justifyContent="center" key={card.title}>
            <Card
              sx={{ maxWidth: 350 }}
              component={motion.div}
              variants={fadeAnimation}
              custom={i + 0.8}
            >
              <CardMedia component="img" height="250" image={card.src} alt={card.alt} />
              <CardContent>
                <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default memo(OurAbility);
