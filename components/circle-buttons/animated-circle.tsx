import React from 'react';
import styles from './animated-circle.module.css';

const AnimatedCircle = ({ stroke = 2 }) => {
  return (
    <svg className={styles.container} aria-hidden="true">
      <circle
        shapeRendering="geometricPrecision"
        className={styles.circle}
        strokeWidth={stroke}
        r="50%"
        cx="50%"
        cy="50%"
      />
      <circle
        shapeRendering="geometricPrecision"
        className={`${styles.circle} inner-circle`}
        strokeWidth={stroke}
        r="50%"
        cx="50%"
        cy="50%"
      />
    </svg>
  );
};

export default AnimatedCircle;
