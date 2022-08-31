import { Login, Logout } from '@mui/icons-material';
import { Typography, IconButton } from '@mui/material';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { IUserResponse } from 'shared/api/lib/types';

type IUserPanel = {
  userAuth: IUserResponse | null;
  setModal: Dispatch<SetStateAction<boolean>>;
  setUserAuth: Dispatch<SetStateAction<IUserResponse | null>>;
};

const UserPanel = (props: IUserPanel) => {
  const { userAuth, setModal, setUserAuth } = props;
  const UserLogout = (user: IUserResponse) => (
    <IconButton
      color="secondary"
      onClick={() => {
        setUserAuth(null);
        window.location.reload();
      }}
    >
      <Typography variant="h6" component="div">
        {user.name}
      </Typography>
      <Logout sx={{ ml: 1 }} />
    </IconButton>
  );
  const UserLogin = () => (
    <IconButton color="secondary" onClick={() => setModal(true)}>
      <Login sx={{ mr: 1 }} />
      <Typography variant="h6" component="div">
        Войти
      </Typography>
    </IconButton>
  );

  return <Fragment>{userAuth ? UserLogout(userAuth) : <UserLogin />}</Fragment>;
};

export default UserPanel;
