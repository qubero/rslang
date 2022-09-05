import { useCallback, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_PATH } from 'shared/constants';

const useDrawer = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  const { SPRINT, AUDIOCALL } = ROUTE_PATH;

  const handleToggle = useCallback(() => setToggle((state) => !state), []);
  const handleDrawerOpen = useCallback(() => setOpen(true), []);
  const handleDrawerClose = useCallback(() => {
    setOpen(false);
    setToggle(false);
  }, []);

  const hasFooter = useCallback(
    () => pathname !== `/${SPRINT}` && pathname !== `/${AUDIOCALL}`,
    [AUDIOCALL, SPRINT, pathname]
  );

  return { open, toggle, handleDrawerOpen, handleDrawerClose, handleToggle, hasFooter };
};

export { useDrawer };
