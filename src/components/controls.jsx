import React from 'react';
import ThemeToggle from './themeToggle';
import * as styles from './controls.module.css';

const isBrowser = typeof window !== 'undefined';

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <ul>
        <li>{isBrowser && <ThemeToggle />}</li>
      </ul>
    </div>
  );
};

export default Navigation;
