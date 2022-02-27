import React from 'react';
import * as styles from './circleButton.module.css';

const CircleButton = ({ label, size = 48, children }) => {
  const strokeWidth = 2;

  return (
    <label className={styles.container} for={label}>
      <svg className={styles.svg}>
        <circle
          className={styles.circle}
          cx="50%"
          cy="50%"
          r={size / 2 - strokeWidth}
          strokeWidth={strokeWidth}
        />
        <circle
          className={`${styles.circle} ${styles.innerCircle}`}
          cx="50%"
          cy="50%"
          r={size / 2 - strokeWidth}
          strokeWidth={strokeWidth}
        />
      </svg>
      {children}
    </label>
  );
};

export default CircleButton;
