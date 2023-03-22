import React, { useRef } from 'react';
import useTabTrap from '@/hooks/use-tab-trap';
import styles from './dialog.module.css';
import useLockScroll from '@hooks/use-lock-scroll';

type DialogProps = {
  children: React.ReactNode;
  close: (e?) => void;
};

const Dialog = ({ close, children }: DialogProps) => {
  const ref = useRef(null);

  useTabTrap(ref);
  useLockScroll();

  const clickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      close();
    }
  };

  return (
    <aside
      className={styles.overlay}
      onClick={clickOutside}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
    >
      <div className={styles.dialog} ref={ref}>
        {children}
      </div>
    </aside>
  );
};

export default Dialog;
