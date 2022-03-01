import { Link } from 'gatsby';
import React from 'react';

import CopyLinkButton from './copyLinkButton';
import ThemeToggle from './themeToggle';
import * as styles from './header.module.css';

const isBrowser = typeof window !== 'undefined';

const Header = ({ title }) => (
  <nav className={styles.container}>
    <ul className={styles.list}>
      <li>
        <h1>
          <Link to="/" className="underline">
            {title}
          </Link>
        </h1>
      </li>
      <li>{<CopyLinkButton />}</li>
      <li>{isBrowser && <ThemeToggle />}</li>
    </ul>
  </nav>
);

export default Header;
