interface IModalProps {
  children: JSX.Element[] | JSX.Element;
  open: boolean;
  handlerClose: () => void;
}

export type { IModalProps };
