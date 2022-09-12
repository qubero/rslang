import { FC, memo } from 'react';
import { Box, Drawer, useMediaQuery } from '@mui/material';

import { IMiniDrawerProps } from '../lib/types';
import { Drawer as ResponsiveDrawer, drawerWidth } from '../lib/styles';
import DrawerContent from './DrawerContent';

const MiniDrawer: FC<IMiniDrawerProps> = (props) => {
  const { open, handleDrawerClose } = props;
  const matches = useMediaQuery('(max-width:1024px)');

  return (
    <Box component="nav">
      {matches ? (
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'flex', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { xs: '100%', sm: drawerWidth },
            },
          }}
        >
          <DrawerContent {...props} />
        </Drawer>
      ) : (
        <ResponsiveDrawer variant="permanent" open={open}>
          <DrawerContent {...props} />
        </ResponsiveDrawer>
      )}
    </Box>
  );
};

export default memo(MiniDrawer);
