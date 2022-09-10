import { ChangeEvent, memo, useCallback } from 'react';
import { Box, Pagination } from '@mui/material';
import { motion } from 'framer-motion';

import { fadeAnimation } from 'shared/lib/styles';
import { themeColor } from 'widgets/BookHeader/lib/styles';
import { useQueryParams } from 'widgets/BookHeader/model/hooks/useQuery';
import { useAppDispatch } from 'shared/store/model/hooks';
import { setLoading } from 'shared/store/slices/bookSlice';

type IWordsPagination = { learn: boolean };

const WordsPagination = ({ learn }: IWordsPagination) => {
  const { group, page, setQuery } = useQueryParams();
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<unknown>, value: number) => {
    setQuery({ group, page: `${value - 1}` });
    dispatch(setLoading(true));
  };
  if (group === '6') return null;
  return (
    <Box
      component={motion.div}
      variants={fadeAnimation}
      custom={1.2}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Pagination
        color="secondary"
        className={`Pagination${learn ? 'Learn' : themeColor[Number(group)]}`}
        count={30}
        page={Number(page) + 1}
        onChange={handleChange}
        shape="rounded"
        size="large"
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </Box>
  );
};

export default memo(WordsPagination);
