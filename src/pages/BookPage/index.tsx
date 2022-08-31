import { useState } from 'react';
import { motion } from 'framer-motion';
import { Stack } from '@mui/material';

import WordsPanel from 'widgets/BookContent/WordsPanel';
import GroupPanel from 'widgets/BookHeader/GroupPanel';
import './lib/style.scss';

const BookPage = () => {
  const [isLearning, setLearning] = useState(false);

  return (
    <Stack
      component={motion.section}
      spacing={1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      sx={{ mt: 3 }}
    >
      <GroupPanel isLearning={isLearning} />
      <WordsPanel setLearning={setLearning} />
    </Stack>
  );
};

export default BookPage;
