import { FC, memo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Language, Menu } from '@mui/icons-material';

import Authorization from 'widgets/Authorization';
import ModalInfo from 'shared/ui/Modal';
import { IUserResponse } from 'shared/api/lib/types';
import { IAppBarProps } from './lib/types';
import { iconStyle, AppBar as BarHeader } from './lib/styles';
import { useLocalStorage, useRefreshToken } from './model/hooks';
import UserPanel from './ui/UserPanel';

const AppBar: FC<IAppBarProps> = (props) => {
  const { open, handleDrawerOpen } = props;
  const [modalToggle, setModalToggle] = useState(false);
  const [userAuth, setUserAuth] = useLocalStorage<IUserResponse | null>(null, 'Team30-UserAuth');
  useRefreshToken(userAuth, setUserAuth);

  return (
    <BarHeader position="fixed" open={open}>
      <Toolbar>
        <IconButton color="secondary" onClick={handleDrawerOpen} edge="start" sx={iconStyle(open)}>
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
          <UserPanel userAuth={userAuth} setUserAuth={setUserAuth} setModal={setModalToggle} />
        </Box>
      </Toolbar>
      <ModalInfo open={modalToggle} handlerClose={() => setModalToggle(false)}>
        <Authorization handlerClose={() => setModalToggle(false)} setUserAuth={setUserAuth} />
      </ModalInfo>
    </BarHeader>
  );
};

export default memo(AppBar);
