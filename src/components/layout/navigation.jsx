import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { RiMenuUnfoldFill } from '@react-icons/all-files/ri/RiMenuUnfoldFill';
import { RiMenuFoldFill } from '@react-icons/all-files/ri/RiMenuFoldFill';
import CircleButton from '../buttons/circleButton';
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

  useClickOutside(ref, () => setIsOpen(false));

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
    <>
      <nav className={`animate-colors ${styles.nav}`} aria-label="Main navigation">
        <a className="skip-to-content underline" href="#main">
          Skip to content
        </a>

        <ul className={styles.list}>
          <li>
            <CircleButton label="Home" href="/">
              <FaHome />
            </CircleButton>
          </li>
          <li>
            <CircleButton label="Home" handleClick={toggleMenu}>
              {isOpen ? <RiMenuFoldFill /> : <RiMenuUnfoldFill />}
            </CircleButton>
          </li>
        </ul>
      </nav>

      <div className={styles.subMenu} data-open={isOpen} ref={ref}>
        <ol>
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
        </ol>
      </div>
    </>
  );
};

export default Navigation;
