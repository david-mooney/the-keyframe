import React, { useState, useEffect } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import CircleToggle from './circle-toggle';
import styles from './theme-toggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = root.classList.contains('dark') ? 'dark' : 'light';

    setTheme(initialTheme);
    setChecked(initialTheme === 'dark');
  }, []);

  const handleClick = () => {
    const root = window.document.documentElement;
    const isDark = root.classList.contains('dark');

    root.classList.replace(
      isDark ? 'dark' : 'light',
      isDark ? 'light' : 'dark'
    );
    window.localStorage.setItem('__theme', isDark ? 'light' : 'dark');

    setTheme(isDark ? 'light' : 'dark');
    setChecked(!isDark);
  };

  return (
    theme && (
      <CircleToggle
        checked={checked}
        handleClick={handleClick}
        label="Toggle dark mode"
      >
        <span
          className={`${styles.icon} ${styles.sun}`}
          data-active={`${!checked}`}
          aria-hidden="true"
        >
          <BsSunFill size="50%" />
        </span>
        <span
          className={`${styles.icon} ${styles.moon}`}
          data-active={`${checked}`}
          aria-hidden="true"
        >
          <BsMoonFill size="50%" />
        </span>
      </CircleToggle>
    )
  );
};

export default ThemeToggle;
