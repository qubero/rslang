import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_PATH } from 'shared/constants';

const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  const { SPRINT, AUDIOCALL } = ROUTE_PATH;

  const handleToggle = () => {
    setToggle((state) => !state);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setToggle(false);
  };
  const hasFooter = () => pathname !== `/${SPRINT}` && pathname !== `/${AUDIOCALL}`;

  return { open, toggle, handleDrawerOpen, handleDrawerClose, handleToggle, hasFooter };
};

export { useDrawer };
