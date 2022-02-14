import { Link } from 'gatsby';
import React from 'react';

import ThemeToggle from './themeToggle';
import * as header from './header.module.css';

const isBrowser = typeof window !== 'undefined';

const Header = ({ title }) => {
  console.log('rendering...');

  return (
    <nav className={header.header}>
      <ul>
        <li className={header.fullWidth}>
          <h1 className="main-heading">
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
