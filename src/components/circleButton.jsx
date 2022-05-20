import React from 'react';
import * as styles from './circleButton.module.css';

const CircleButton = ({ label, size = 44, children }) => {
  return (
    <label className={styles.container} htmlFor={label} style={{ '--size': `${size}px` }}>
      {children}
    </label>
  );
};

export default CircleButton;
