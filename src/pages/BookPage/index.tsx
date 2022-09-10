import { motion } from 'framer-motion';
import { Stack } from '@mui/material';

import WordsPanel from 'widgets/BookContent';
import GroupPanel from 'widgets/BookHeader';
import { Wrapper } from 'shared/ui/Wrapper';
import { motionSettings } from 'shared/lib/styles';
import './lib/style.scss';

const BookPage = () => {
  return (
    <Wrapper>
      <Stack component={motion.section} spacing={1} {...motionSettings} sx={{ mt: 3 }}>
        <GroupPanel />
        <WordsPanel />
      </Stack>
    </Wrapper>
  );
};

export default BookPage;
