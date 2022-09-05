import { FC, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Toolbar, Typography, IconButton, Box } from '@mui/material';
import { School, Menu } from '@mui/icons-material';

import Authorization from 'widgets/Authorization';
import ModalInfo from 'shared/ui/Modal';
import { IUserResponse } from 'shared/api/lib/types';
import { STORAGE_AUTH_USER } from 'shared/constants';
import { IAppBarProps } from './lib/types';
import { iconStyle, AppBar as BarHeader } from './lib/styles';
import { useLocalStorage } from './model/hooks';
import UserPanel from './ui/UserPanel';

const AppBar: FC<IAppBarProps> = (props) => {
  const { open, handleDrawerOpen } = props;
  const [modalToggle, setModalToggle] = useState(false);
  const [userAuth, setUserAuth] = useLocalStorage<IUserResponse | null>(null, STORAGE_AUTH_USER);

  return (
    <BarHeader position="fixed" open={open}>
      <Toolbar>
        <IconButton color="secondary" onClick={handleDrawerOpen} edge="start" sx={iconStyle(open)}>
          <Menu />
        </IconButton>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-between' }}>
          <Link to="/" className="navLink">
            <IconButton color="secondary">
              <Typography variant="h5" noWrap component="h1" sx={{ fontWeight: 'bold' }}>
                RSLang
              </Typography>
              <School sx={{ ml: 1 }} />
            </IconButton>
          </Link>
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
