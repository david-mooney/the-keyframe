import React from 'react';
import ThemeToggle from '../themeToggle';
import ScrollToTop from '../scrollToTop';
import * as styles from './controls.module.css';

const isBrowser = typeof window !== 'undefined';

const Navigation = () => {
  return (
    <div className={`animate-colors ${styles.navigation}`}>
      <ul>
        <li>{isBrowser && <ThemeToggle />}</li>
        <li>
          <ScrollToTop />
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
