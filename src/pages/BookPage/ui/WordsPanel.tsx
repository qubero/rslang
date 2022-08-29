import { Fragment, FC, ChangeEvent, memo } from 'react';
import { motion } from 'framer-motion';
import { Box, Pagination } from '@mui/material';

import { useGetWordsQuery } from 'shared/api';
import { fadeAnimation } from 'shared/lib/styles';
import { themeColor } from '../lib/styles';
import { IWordsPanel } from '../lib/types';
import WordsList from './WordsList';

const WordsPanel: FC<IWordsPanel> = (props) => {
  const { group, page, setQuery } = props;
  const { data: words } = useGetWordsQuery({ page: Number(page), group: Number(group) });
  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    setQuery({ group, page: `${value - 1}` });
  };

  return (
    <Fragment>
      <Box component={motion.div} variants={fadeAnimation} custom={1.2}>
        <Pagination
          className={`Pagination${themeColor[Number(group)]}`}
          count={30}
          page={Number(page) + 1}
          onChange={handleChange}
          shape="rounded"
          size="large"
          showFirstButton
          showLastButton
          sx={{ display: 'flex', justifyContent: 'center' }}
        />
      </Box>
      <WordsList words={words} group={group} />
    </Fragment>
  );
};

export default memo(WordsPanel);
