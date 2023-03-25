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
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 20,
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
