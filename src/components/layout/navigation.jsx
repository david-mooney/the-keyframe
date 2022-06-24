/* TODO - links button */

import React from 'react';
import Home from '../buttons/homeButton';
import Back from '../buttons/backButton';
import * as styles from './navigation.module.css';

const Navigation = ({ title }) => (
  <nav className={`animate-colors ${styles.nav}`} aria-label="Main navigation">
    <a className="skip-to-content underline" href="#main">
      Skip to content
    </a>

    <ul className={styles.list}>
      <li>
        <Home />
      </li>
      <li>
        <Back />
      </li>
    </ul>
  </nav>
);

export default Navigation;
