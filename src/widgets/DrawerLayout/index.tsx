import { memo } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { Outlet, useLocation } from 'react-router-dom';

import Footer from 'widgets/Footer';
import MiniDrawer from 'shared/ui/Drawer';
import AppBar from 'shared/ui/AppBar';
import { DrawerHeader } from 'shared/ui/Drawer/lib/styles';
import { useDrawer } from './model';
import { drawlerStyle } from './lib/styled';

const DrawerLayout = () => {
  const { open, handleDrawerOpen, ...propsDrawer } = useDrawer();
  const { pathname } = useLocation();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <MiniDrawer open={open} {...propsDrawer} />
      <Box component="main" sx={drawlerStyle}>
        <DrawerHeader />
        <Container maxWidth="xl" sx={{ marginY: 3 }}>
          <Outlet />
        </Container>
        {pathname !== '/sprint' && pathname !== '/audiocall' && <Footer />}
      </Box>
    </Box>
  );
};

export default memo(DrawerLayout);
