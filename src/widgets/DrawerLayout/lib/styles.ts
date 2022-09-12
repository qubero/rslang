import MuiDrawer from '@mui/material/Drawer';
import { styled, Theme, CSSObject } from '@mui/material/styles';

const drawerWidth = 240;

const drawlerStyle = { flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100vh' };

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  background: '#fffdfd',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  [theme.breakpoints.down('lg')]: {
    width: 0,
    display: 'none',
  },
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: '#fffdfd',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.down('lg')]: {
    width: 0,
    display: 'none',
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  })
);
export { drawlerStyle, Drawer, DrawerHeader, drawerWidth };
