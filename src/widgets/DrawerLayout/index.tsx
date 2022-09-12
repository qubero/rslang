import { memo } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Footer from 'widgets/Footer';
import MiniDrawer from 'widgets/DrawerLayout/ui/MiniDrawer';
import AppBar from 'widgets/AppBar';
import { useDrawer } from './model';
import { DrawerHeader, drawlerStyle } from './lib/styles';

const DrawerLayout = () => {
  const { hasFooter, ...props } = useDrawer();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar {...props} />
      <MiniDrawer {...props} />
      <Box component="main" sx={drawlerStyle}>
        <DrawerHeader />
        <Outlet />
        {hasFooter() && <Footer />}
      </Box>
    </Box>
  );
};

export default memo(DrawerLayout);
