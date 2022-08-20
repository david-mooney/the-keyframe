import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { RiMenuUnfoldFill } from '@react-icons/all-files/ri/RiMenuUnfoldFill';
import { RiMenuFoldFill } from '@react-icons/all-files/ri/RiMenuFoldFill';
import { CircleButton, CircleLink } from '../buttons/circleButton';
import useClickOutside from '../../utilities/useClickOutside';
import * as styles from './navigation.module.css';

const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const prevLocation = usePrevious(location);
  const ref = useRef();

  useClickOutside(ref, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    if (location !== prevLocation) {
      setIsOpen(false);
    }
  }, [location, prevLocation, setIsOpen]);

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
              aria-expanded={isOpen}
              aria-controls="submenu"
              handleClick={toggleMenu}
            >
              {isOpen ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
            </CircleButton>
          </li>
        </ul>
      </div>

      <div id="submenu" className={styles.subMenu} data-open={isOpen}>
        <ol className={styles.subMenuList} data-animate="true">
          <li>
            <Link to="/about" className="underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/subscribe" className="underline">
              Subscribe
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="underline">
              Privacy
            </Link>
          </li>
          <li>
            <a
              href="/sitemap/sitemap-0.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Sitemap
            </a>
          </li>
          <li>
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
      </div>
    </nav>
  );
};

export default Navigation;
