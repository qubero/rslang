import { Fragment, memo } from 'react';
import { Box, List, Typography, Divider, IconButton, Collapse } from '@mui/material';
import {
  ChevronLeft,
  Widgets,
  AutoStories,
  Extension,
  Addchart,
  ExpandLess,
  ExpandMore,
  ElectricBolt,
  Audiotrack,
} from '@mui/icons-material';

import { ROUTE_PATH } from 'shared/constants';
import { DrawerHeader } from '../lib/styles';
import ListItem from './ListItemMenu';

type IDrawerContent = {
  toggle: boolean;
  open: boolean;
  handleDrawerClose: () => void;
  handleToggle: () => void;
};

const DrawerContent = (props: IDrawerContent) => {
  const { open, toggle, handleDrawerClose, handleToggle } = props;
  const { INDEX, BOOK, SPRINT, AUDIOCALL, INFO } = ROUTE_PATH;

  return (
    <Fragment>
      <DrawerHeader sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ ml: 8.5, opacity: open ? 1 : 0, transition: 'all .5s' }}>
          Меню
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeft color="primary" />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ p: 0 }}>
        <ListItem text="Главная" open={open} link={INDEX} onClick={handleDrawerClose}>
          <Widgets color="primary" />
        </ListItem>
        <ListItem text="Учебник" open={open} link={BOOK} onClick={handleDrawerClose}>
          <AutoStories color="primary" />
        </ListItem>
        <ListItem text="Игры" open={open} onClick={handleToggle}>
          <Extension color="primary" />
          {toggle ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={toggle} timeout="auto" unmountOnExit>
          <Box>
            <ListItem text="Спринт" open={open} link={SPRINT} onClick={handleDrawerClose}>
              <ElectricBolt color="primary" />
            </ListItem>
            <ListItem text="Аудиовызов" open={open} link={AUDIOCALL} onClick={handleDrawerClose}>
              <Audiotrack color="primary" />
            </ListItem>
          </Box>
        </Collapse>
        <ListItem text="Статистика" open={open} link={INFO} onClick={handleDrawerClose}>
          <Addchart color="primary" />
        </ListItem>
      </List>
      <Divider />
    </Fragment>
  );
};

export default memo(DrawerContent);
