import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface IAppBar extends MuiAppBarProps {
  open?: boolean;
}

interface IAppBarProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

export type { IAppBarProps, IAppBar };
