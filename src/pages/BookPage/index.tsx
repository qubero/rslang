import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Stack } from '@mui/material';

import { useSearchParams } from 'react-router-dom';
import GroupPanel from './ui/GroupPanel';
import WordsPanel from './ui/WordsPanel';
import './lib/style.scss';

const BookPage = () => {
  const [query, setQuery] = useSearchParams();
  const group = useMemo(() => query.get('group') || '0', [query]);
  const page = useMemo(() => query.get('page') || '0', [query]);
  console.log('render');
  return (
    <Stack
      component={motion.section}
      spacing={1}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      sx={{ mt: 3 }}
    >
      <GroupPanel group={group} setQuery={setQuery} />
      <WordsPanel group={group} page={page} setQuery={setQuery} />
    </Stack>
  );
};

export default BookPage;
