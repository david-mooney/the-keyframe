import { Link } from 'gatsby';
import React from 'react';

import ThemeToggle from './themeToggle';
import * as styles from './header.module.css';

const isBrowser = typeof window !== 'undefined';

const Header = ({ title }) => {
  return (
    <nav className={styles.container}>
      <ul>
        <li className={styles.fullWidth}>
          <h1 className={styles.mainTitle}>
            <Link to="/">{title}</Link>
          </h1>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/newsletter">Newsletter</a>
        </li>
        <li>{isBrowser && <ThemeToggle />}</li>
      </ul>
    </nav>
  );
};

export default Header;
