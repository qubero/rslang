import { memo } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

import MiniDrawer from 'shared/ui/Drawer';
import AppBar from 'shared/ui/AppBar';
import { DrawerHeader } from 'shared/ui/Drawer/lib/styles';
import { useDrawer } from './model';
import { drawlerStyle } from './lib/styled';

const DrawerLayout = () => {
  const { open, handleDrawerOpen, ...propsDrawer } = useDrawer();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <MiniDrawer open={open} {...propsDrawer} />
      <Box component="main" sx={drawlerStyle}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default memo(DrawerLayout);
