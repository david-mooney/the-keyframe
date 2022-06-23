import React from 'react';
import ThemeToggle from '../buttons/themeToggle';
import ScrollToTop from '../buttons/scrollToTop';
import * as styles from './controls.module.css';

const Controls = () => {
  return (
    <div className={`animate-colors ${styles.navigation}`}>
      <ul>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <ScrollToTop />
        </li>
      </ul>
    </div>
  );
};

export default Controls;
