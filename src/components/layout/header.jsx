import { Link } from 'gatsby';
import React from 'react';
import Controls from '../controls';

import * as styles from './header.module.css';

const Header = ({ title }) => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <a className="skip-to-content underline" href="#main">
        Skip to content
      </a>

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

    <Controls />
  </header>
);

export default Header;
