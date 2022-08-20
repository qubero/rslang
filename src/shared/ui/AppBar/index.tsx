import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Language, Menu, Login } from '@mui/icons-material';

import { IAppBarProps } from './lib/types';
import { AppBar as BarHeader } from './lib/styles';

const AppBar: FC<IAppBarProps> = (props) => {
  const { open, handleDrawerOpen } = props;

  return (
    <BarHeader position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="secondary"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ marginRight: 3, fontSize: 0, display: open ? 'none' : 'block' }}
        >
          <Menu />
        </IconButton>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between' }}>
          <NavLink to="/" className="navLink logo">
            <IconButton color="secondary">
              <Typography variant="h5" noWrap component="h1">
                RSLang
              </Typography>
              <Language sx={{ ml: 1 }} />
            </IconButton>
          </NavLink>
          <IconButton color="secondary">
            <Login sx={{ mr: 1 }} />
            <Typography variant="h6" component="div">
              Login
            </Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </BarHeader>
  );
};

export default AppBar;
