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
  const [tabIndex, setTabIndex] = useState(-1);
  const location = useLocation();
  const prevLocation = usePrevious(location);
  const ref = useRef();

  useClickOutside(ref, () => {
    setIsOpen(false);
    setTabIndex(-1);
  });

  useEffect(() => {
    if (location !== prevLocation) {
      setIsOpen(false);
      setTabIndex(-1);
    }
  }, [location, prevLocation, setIsOpen]);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    setTabIndex(newState ? 0 : -1);
  };

  return (
    <nav ref={ref} aria-label="Main navigation">
      <div className={`animate-colors ${styles.nav}`}>
        <a className="skip-to-content underline" href="#main">
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

      <div className={styles.subMenu} data-open={isOpen} id="submenu">
        <ol className={styles.subMenuList}>
          <li>
            <Link to="/about" className="underline" tabIndex={tabIndex}>
              About
            </Link>
          </li>
          <li>
            <Link to="/subscribe" className="underline" tabIndex={tabIndex}>
              Subscribe
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="underline" tabIndex={tabIndex}>
              Privacy
            </Link>
          </li>
          <li>
            <a
              href="/sitemap/sitemap-0.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              tabIndex={tabIndex}
            >
              Sitemap.xml
            </a>
          </li>
          <li>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              tabIndex={tabIndex}
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
