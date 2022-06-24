import React from 'react';
import ThemeToggle from '../buttons/themeToggle';
import ScrollToTop from '../buttons/scrollToTop';
import * as styles from './controls.module.css';

const Controls = () => (
  <aside className={`animate-colors ${styles.navigation}`} aria-label="Page Controls">
    <ul>
      <li>
        <ThemeToggle />
      </li>
      <li>
        <ScrollToTop />
      </li>
    </ul>
  </aside>
);

export default Controls;
