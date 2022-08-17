import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

import { Flag } from '@mui/icons-material';

const Header = () => (
  <AppBar position="static">
    <Toolbar sx={{ paddingY: 1 }}>
      <Flag fontSize="large" />
      <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
        RSLang
      </Typography>
      <NavLink to="/">
        <Typography variant="h6" component="div" color="inherit" sx={{ mr: 2 }}>
          Home
        </Typography>
      </NavLink>
      <NavLink to="/game1">
        <Typography variant="h6" component="div" color="inherit" sx={{ mr: 2 }}>
          Game 1
        </Typography>
      </NavLink>
      <NavLink to="/game2">
        <Typography variant="h6" component="div" color="inherit">
          Game 2
        </Typography>
      </NavLink>
    </Toolbar>
  </AppBar>
);

export default memo(Header);
