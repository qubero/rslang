import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, List, Typography, Divider, IconButton, Collapse } from '@mui/material';
import {
  ChevronLeft,
  Widgets,
  AutoStories,
  Extension,
  Addchart,
  Logout,
  ExpandLess,
  ExpandMore,
  ElectricBolt,
  Audiotrack
} from '@mui/icons-material';

import ListItem from '../ListItemMenu';
import { Drawer, DrawerHeader } from './lib/styles';
import { IMiniDrawerProps } from './lib/types';

const MiniDrawer: FC<IMiniDrawerProps> = (props) => {
  const { open, toggle, handleDrawerClose, handleToggle } = props;

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ ml: 8.5, opacity: open ? 1 : 0, transition: 'all .5s' }}>
          Menu
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft color="primary" />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ p: 0 }} component="nav">
        <NavLink to="/" className="navLink">
          <ListItem text="Home" open={open}>
            <Widgets color="primary" />
          </ListItem>
        </NavLink>
        <NavLink to="/book" className="navLink">
          <ListItem text="Book" open={open}>
            <AutoStories color="primary" />
          </ListItem>
        </NavLink>
        <ListItem text="Games" open={open} onClick={handleToggle} disabled={!open}>
          <Extension color="primary" />
          {toggle ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={toggle} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 2 }}>
            <NavLink to="/sprint" className="navLink">
              <ListItem text="Sprint" open={toggle}>
                <ElectricBolt color="primary" />
              </ListItem>
            </NavLink>
            <NavLink to="/audio" className="navLink">
              <ListItem text="Audio" open={toggle}>
                <Audiotrack color="primary" />
              </ListItem>
            </NavLink>
          </Box>
        </Collapse>
        <NavLink to="/info" className="navLink">
          <ListItem text="Info" open={open}>
            <Addchart color="primary" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <Box sx={{ mt: 'auto' }}>
        <ListItem text="Log out" open={open}>
          <Logout color="primary" />
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default MiniDrawer;
