import { Link } from 'gatsby';
import React from 'react';
import Controls from '../controls';

import * as styles from './header.module.css';

/* TODO: skip should auto focus on first element in main */

const Header = ({ title }) => (
  <header className={styles.header}>
    <a className="skip-to-content underline" href="#main">
      Skip to content
    </a>

    <Controls />

    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <h1>
            <Link to="/" className="underline">
              {title}
            </Link>
          </h1>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
