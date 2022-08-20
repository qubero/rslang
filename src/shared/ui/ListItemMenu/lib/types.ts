interface IListItemProps {
  open: boolean;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  children: JSX.Element | JSX.Element[];
}
export type { IListItemProps };
