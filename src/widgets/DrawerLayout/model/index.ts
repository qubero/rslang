import { useState } from 'react';

const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

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
  return { open, toggle, handleDrawerOpen, handleDrawerClose, handleToggle };
};

export { useDrawer };
