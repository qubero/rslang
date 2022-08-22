import {
  Stack,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import { teamData } from './model/data';

const personAnimation = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const OurTeam = () => {
  return (
    <Stack
      sx={{ marginY: 4, justifyContent: 'center', alignItems: 'center' }}
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold' }}
        component={motion.h4}
        variants={personAnimation}
      >
        Наша Команда
      </Typography>
      <Stack spacing={4} sx={{ marginY: 4, justifyContent: 'center', alignItems: 'center' }}>
        {teamData.map((person, i) => (
          <Card
            key={person.title}
            sx={{ maxWidth: 800, textDecoration: 'none' }}
            component={motion.a}
            href={person.link}
            variants={personAnimation}
            custom={(i + 1) * 2}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardActionArea
              sx={{
                display: 'flex',
                flexDirection: { sm: 'column', md: i % 2 ? 'row-reverse' : 'row' },
              }}
            >
              <CardMedia
                component="img"
                sx={{ width: 300, height: 350 }}
                image={person.src}
                alt={person.title}
              />
              <CardContent>
                <Typography variant="h5">{person.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: 0.3 }}>
                  {person.subtitle}
                </Typography>
                <Typography variant="body2">{person.description}</Typography>
                <Divider sx={{ height: 2, mb: 1 }} />
                <Typography variant="h6">Обязаности</Typography>
                <Typography variant="body2">{person.duty}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default OurTeam;
