import {
  Unstable_Grid2 as Grid,
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { cardData } from './model/data';

const cardAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

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
        variants={cardAnimation}
      >
        Наши возможности
      </Typography>
      <Grid container spacing={3} sx={{ marginY: 4, maxWidth: { md: 650, xl: '100%' } }}>
        {cardData.map((card, i) => (
          <Grid sm={12} md={6} xl={3} display="flex" justifyContent="center" key={card.title}>
            <Card
              sx={{ maxWidth: 300 }}
              component={motion.div}
              variants={cardAnimation}
              custom={i + 1}
            >
              <CardActionArea>
                <CardMedia component="img" height="250" image={card.src} alt={card.alt} />
                <CardContent>
                  <Typography variant="h5" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                    {card.title}
                    <Divider color="#FDF500" sx={{ height: 2, width: '100%' }} />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default OurAbility;
