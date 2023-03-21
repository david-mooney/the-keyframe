import React, { useEffect, useRef } from 'react';
import useTabTrap from '@/hooks/use-tab-trap';
import styles from './dialog.module.css';

type DialogProps = {
  children: React.ReactNode;
  close: () => void;
};

const Dialog = ({ children, close }: DialogProps) => {
  const ref = useRef(null);
  useTabTrap(ref);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeDialog();
      }
    };

    // TODO add a hook and useLayoutEffect
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeDialog = () => {
    close();
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={styles.overlay} onClick={closeDialog}>
      <div className={styles.dialog} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
