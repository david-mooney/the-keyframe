import React, { useState } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import CircleToggle from './circle-toggle';
import styles from './theme-toggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );
  const [checked, setChecked] = useState(
    document.documentElement.classList.contains('dark') ? true : false
  );

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
        <div className={styles.icons}>
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
        </div>
      </CircleToggle>
    )
  );
};

export default ThemeToggle;
