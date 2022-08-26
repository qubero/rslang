import { FC, memo } from 'react';
import { Modal, Box, Backdrop } from '@mui/material';
import { motion } from 'framer-motion';

import { modalStyle } from './lib/styles';
import { IModalProps } from './lib/types';

const ModalInfo: FC<IModalProps> = ({ open, handlerClose, children }) => {
  return (
    <Modal
      open={open}
      onClose={handlerClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        sx={modalStyle}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default memo(ModalInfo);
