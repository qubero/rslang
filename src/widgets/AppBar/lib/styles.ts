import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { IAppBar } from './types';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<IAppBar>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    zIndex: 0,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const iconStyle = (open: boolean) => ({
  marginRight: 3,
  fontSize: 0,
  opacity: open ? 0 : 1,
});

export { AppBar, iconStyle };
