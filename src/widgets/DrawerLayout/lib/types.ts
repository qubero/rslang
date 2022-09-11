interface IMiniDrawerProps {
  open: boolean;
  toggle: boolean;
  handleDrawerClose: () => void;
  handleToggle: () => void;
}

interface IListItemProps {
  open: boolean;
  text: string;
  disabled?: boolean;
  link?: string;
  onClick?: () => void;
  children: JSX.Element | JSX.Element[];
}

export type { IMiniDrawerProps, IListItemProps };
