import React, { useEffect } from 'react';
import { useLocation } from '@reach/router';
import usePrevious from '../../utilities/usePrevious';
import useClickOutside from '../../utilities/useClickOutside';
import * as styles from './drawer.module.css';

const Drawer = ({ children, id, parent, open, setOpen, position = 'left' }) => {
  const location = useLocation();
  const prevLocation = usePrevious(location);

  useClickOutside(parent, () => {
    setOpen(false);
  });

  useEffect(() => {
    if (location !== prevLocation) {
      setOpen(false);
    }
  }, [location, prevLocation, setOpen]);

  return (
    <div id={id} className={styles.drawer} data-open={open} data-position={position}>
      {children}
    </div>
  );
};

export default Drawer;
