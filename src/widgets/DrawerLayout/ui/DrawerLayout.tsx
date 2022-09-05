import { memo } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from 'widgets/Footer';
import MiniDrawer from 'widgets/DrawerLayout/ui/Drawer';
import AppBar from 'widgets/AppBar';
import { DrawerHeader } from 'widgets/DrawerLayout/ui/Drawer/lib/styles';
import { useDrawer } from '../model';
import { drawlerStyle } from '../lib/styled';

const DrawerLayout = () => {
  const { open, handleDrawerOpen, hasFooter, ...propsDrawer } = useDrawer();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <MiniDrawer open={open} {...propsDrawer} />
      <Box component="main" sx={drawlerStyle}>
        <DrawerHeader />
        <Outlet />
        {hasFooter() && <Footer />}
      </Box>
    </Box>
  );
};

export default memo(DrawerLayout);
