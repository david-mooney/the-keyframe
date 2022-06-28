import React from 'react';
import * as styles from './animatedCircle.module.css';

const AnimatedCircle = ({ stroke = 2, size = 40 }) => (
  <svg className={styles.container} aria-hidden="true">
    <circle
      className={styles.circle}
      strokeWidth={stroke}
      r={size / 2 - stroke}
      cx="50%"
      cy="50%"
    />
    <circle
      className={`${styles.circle} innerCircle`}
      strokeWidth={stroke}
      r={size / 2 - stroke}
      cx="50%"
      cy="50%"
    />
  </svg>
);

export default AnimatedCircle;
