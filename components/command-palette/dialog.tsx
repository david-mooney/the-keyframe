import React, { useRef } from 'react';
import { motion } from 'framer-motion'; //TODO - use 'm' instead
import useTabTrap from '@/hooks/use-tab-trap';
import styles from './dialog.module.css';
import useLockScroll from '@hooks/use-lock-scroll';

type DialogProps = {
  children: React.ReactNode;
  close: (e?) => void;
};

// TODO use reduced motion, use m instead of motion
const Dialog = ({ close, children }: DialogProps) => {
  const ref = useRef(null);

  useTabTrap(ref);
  useLockScroll();

  const clickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      close();
    }
  };

  const initial = {
    opacity: 0,
    scale: 0.9,
  };

  const final = {
    opacity: 1,
    scale: 1,
  };

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.overlay}
      onClick={clickOutside}
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      aria-roledescription="Quickly find posts or navigate to other pages. Press escape to close"
    >
      <motion.div
        initial={initial}
        animate={final}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
        className={styles.dialog}
        ref={ref}
      >
        {children}
      </motion.div>
    </motion.aside>
  );
};

export default Dialog;
