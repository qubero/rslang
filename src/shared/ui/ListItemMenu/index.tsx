import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem as List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import { IListItemProps } from './lib/types';

const ListItemMenu: FC<IListItemProps> = (props) => {
  const { open, text, children, onClick, disabled, link } = props;
  const ListBtn = () => (
    <ListItemButton sx={{ minHeight: 68, px: 2.5 }} onClick={onClick} disabled={disabled}>
      <ListItemIcon sx={{ minWidth: 0, mr: 2, justifyContent: 'center' }}>
        {Array.isArray(children) ? children[0] : children}
      </ListItemIcon>
      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, transition: 'all .5s' }} />
      {Array.isArray(children) && open && children[1]}
    </ListItemButton>
  );
  return (
    <List disablePadding sx={{ display: 'block' }}>
      {link ? (
        <NavLink to={link} className="navLink">
          <ListBtn />
        </NavLink>
      ) : (
        <ListBtn />
      )}
    </List>
  );
};

export default memo(ListItemMenu);
