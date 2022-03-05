import React from 'react';
import * as styles from './circleButton.module.css';

const CircleButton = ({ label, size = 44, children }) => {
  const strokeWidth = 2;

  return (
    <label className={styles.container} for={label}>
      <svg className={styles.svg}>
        <circle
          className={styles.circle}
          strokeWidth={strokeWidth}
          cx="50%"
          cy="50%"
          r={size / 2 - strokeWidth}
        />
        <circle
          className={`${styles.circle} ${styles.innerCircle}`}
          strokeWidth={strokeWidth}
          cx="50%"
          cy="50%"
          r={size / 2 - strokeWidth}
        />
      </svg>
      {children}
    </label>
  );
};

export default CircleButton;
