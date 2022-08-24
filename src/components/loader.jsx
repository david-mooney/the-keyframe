import React from 'react';
import * as styles from './loader.module.css';

const Loader = () => (
  <div className={styles.loader}>
    <svg viewBox="0 0 80 80">
      <rect x="8" y="8" width="64" height="64"></rect>
    </svg>
  </div>
);

export default Loader;
