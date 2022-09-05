import { Card, CardActionArea, CardMedia, CardContent, Typography, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { IPerson } from '../lib/types';
import { getCardStyle } from '../lib/util';

const PersonCard = (props: IPerson) => {
  const { title, link, src, subtitle, description, duty, index, slideAnimation } = props;

  return (
    <Card
      key={title}
      sx={{ maxWidth: 800, textDecoration: 'none' }}
      component={motion.a}
      href={link}
      variants={slideAnimation}
      custom={(index + 1) * 2}
      target="_blank"
      rel="noopener noreferrer"
    >
      <CardActionArea sx={getCardStyle(index)}>
        <CardMedia component="img" sx={{ width: 300, height: 360 }} image={src} alt={title} />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: 0.3 }}>
            {subtitle}
          </Typography>
          <Typography variant="body2">{description}</Typography>
          <Divider sx={{ height: 2, mb: 1 }} />
          <Typography variant="h6">Обязаности</Typography>
          <Typography variant="body2">{duty}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PersonCard;
