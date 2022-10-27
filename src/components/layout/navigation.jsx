import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { RiMenuUnfoldFill } from '@react-icons/all-files/ri/RiMenuUnfoldFill';
import { RiMenuFoldFill } from '@react-icons/all-files/ri/RiMenuFoldFill';
import { CircleButton, CircleLink } from '../buttons/circleButton';
import Drawer from './drawer';
import ThemeToggle from '../buttons/themeToggle';
import * as styles from './navigation.module.css';

const links = [
  {
    label: 'Home',
    destination: '/',
  },
  {
    label: 'About',
    destination: '/about',
  },
  {
    label: 'Subscribe',
    destination: '/subscribe',
  },
  {
    label: 'Privacy',
    destination: '/privacy',
  },

  {
    label: 'Sitemap',
    destination: '/sitemap/sitemap-0.xml',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    label: 'Rss',
    destination: '/rss.xml',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

const Navigation = () => {
  const ref = useRef();
  const subMenuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const renderLink = ({ destination, label, target = null, rel = null }) => {
    const Element = target ? (
      <a href={destination} target={target} rel={rel} className="underline">
        {label}
      </a>
    ) : (
      <Link className="underline" to={destination}>
        {label}
      </Link>
    );

    return (
      <li key={destination} className={styles.subMenuItem}>
        {Element}
      </li>
    );
  };

  useEffect(() => {
    let timeout;

    if (isOpen) {
      subMenuRef.current.style.visibility = 'visible';
    } else {
      timeout = setTimeout(() => {
        subMenuRef.current.style.visibility = 'hidden';
      }, 350);
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

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

      <Drawer id="navigationMenu" parent={ref} open={isOpen} setOpen={setIsOpen}>
        <ol ref={subMenuRef} className={styles.subMenu} data-animate="true">
          {links.map(link => renderLink(link))}
        </ol>
      </Drawer>
    </nav>
  );
};

export default Navigation;
