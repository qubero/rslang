import { FC } from 'react';
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
  Audiotrack,
} from '@mui/icons-material';

import { ROUTE_PATH } from 'shared/constants';
import ListItem from '../ListItemMenu';
import { Drawer, DrawerHeader } from './lib/styles';
import { IMiniDrawerProps } from './lib/types';

const MiniDrawer: FC<IMiniDrawerProps> = (props) => {
  const { open, toggle, handleDrawerClose, handleToggle } = props;
  const { INDEX, BOOK, SPINT, AUDIOCALL, INFO } = ROUTE_PATH;

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ ml: 8.5, opacity: open ? 1 : 0, transition: 'all .5s' }}>
          Меню
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft color="primary" />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ p: 0 }} component="nav">
        <ListItem text="Главная" open={open} link={INDEX}>
          <Widgets color="primary" />
        </ListItem>
        <ListItem text="Учебник" open={open} link={BOOK}>
          <AutoStories color="primary" />
        </ListItem>
        <ListItem text="Игры" open={open} onClick={handleToggle} disabled={!open}>
          <Extension color="primary" />
          {toggle ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={toggle} timeout="auto" unmountOnExit>
          <Box sx={{ pl: 2 }}>
            <ListItem text="Спринт" open={toggle} link={SPINT}>
              <ElectricBolt color="primary" />
            </ListItem>
            <ListItem text="Аудиовызов" open={toggle} link={AUDIOCALL}>
              <Audiotrack color="primary" />
            </ListItem>
          </Box>
        </Collapse>
        <ListItem text="Статистика" open={open} link={INFO}>
          <Addchart color="primary" />
        </ListItem>
      </List>
      <Divider />
      <Box sx={{ mt: 'auto' }}>
        <ListItem text="Выйти" open={open}>
          <Logout color="primary" />
        </ListItem>
      </Box>
    </Drawer>
  );
};

export default MiniDrawer;
