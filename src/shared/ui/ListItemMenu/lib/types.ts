interface IListItemProps {
  open: boolean;
  text: string;
  disabled?: boolean;
  link?: string;
  onClick?: () => void;
  children: JSX.Element | JSX.Element[];
}
export type { IListItemProps };
