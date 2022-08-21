import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { RiMenuUnfoldFill } from '@react-icons/all-files/ri/RiMenuUnfoldFill';
import { RiMenuFoldFill } from '@react-icons/all-files/ri/RiMenuFoldFill';
import { CircleButton, CircleLink } from '../buttons/circleButton';
import Drawer from './drawer';
import ThemeToggle from '../buttons/themeToggle';
import * as styles from './navigation.module.css';

const Navigation = () => {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const state = !isOpen;
    setIsOpen(state);
  };

  return (
    <nav ref={ref} aria-label="Main navigation">
      <div className={styles.nav} data-animate="true">
        <a className="skipToContent underline" href="#main">
          Skip to content
        </a>

        <ul className={styles.list}>
          <li>
            <CircleLink label="Home" href="/">
              <FaHome />
            </CircleLink>
          </li>
          <li>
            <CircleButton
              label="Toggle submenu with page links"
              aria-controls="submenu"
              aria-expanded={isOpen}
              handleClick={toggleMenu}
            >
              {isOpen ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
            </CircleButton>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </div>

      <Drawer id="navigation-menu" parent={ref} open={isOpen} setOpen={setIsOpen}>
        <ol className={styles.subMenu} data-animate="true">
          <li className={styles.subMenuItem}>
            <Link to="/" className="underline">
              Home
            </Link>
          </li>
          <li className={styles.subMenuItem}>
            <Link to="/about" className="underline">
              About
            </Link>
          </li>
          <li className={styles.subMenuItem}>
            <Link to="/subscribe" className="underline">
              Subscribe
            </Link>
          </li>
          <li className={styles.subMenuItem}>
            <Link to="/privacy" className="underline">
              Privacy
            </Link>
          </li>
          <li className={styles.subMenuItem}>
            <a
              href="/sitemap/sitemap-0.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Sitemap
            </a>
          </li>
          <li className={styles.subMenuItem}>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              RSS
            </a>
          </li>
        </ol>
      </Drawer>
    </nav>
  );
};

export default Navigation;
