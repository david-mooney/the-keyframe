import { Link } from 'gatsby';
import React from 'react';
import * as styles from './header.module.css';

const Header = ({ title, location }) => {
  const tabIndex = location.pathname === '/' ? 0 : -1;

  return (
    <header className={`animate-colors ${styles.header}`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <h1>
              <Link to="/" className="underline" tabIndex={tabIndex}>
                {title}
              </Link>
            </h1>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
