import React from 'react';
import Back from '../buttons/backButton';
import * as styles from './navigation.module.css';

const Navigation = ({ title }) => (
  <nav className={`animate-colors ${styles.nav}`}>
    <ul className={styles.list}>
      {/* <li>
        <Home />
        <Links />
      </li> */}
      <li>
        <Back />
      </li>
    </ul>
  </nav>
);

export default Navigation;
