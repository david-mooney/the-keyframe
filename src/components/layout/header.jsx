import { Link } from 'gatsby';
import React from 'react';
// import Back from '../buttons/backButton';
import * as styles from './header.module.css';

const Header = ({ title }) => (
  <header className={`animate-colors ${styles.header}`}>
    <a className="skip-to-content underline" href="#main">
      Skip to content
    </a>

    {/* <Back /> */}

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
