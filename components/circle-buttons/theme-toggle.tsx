import React, { useEffect, useState } from 'react';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useTheme } from '@hooks/use-theme';
import useKeyCommand from '@hooks/use-key-command';
import CircleToggle from './circle-toggle';
import styles from './theme-toggle.module.css';

const ThemeToggle = () => {
  const { theme, changeTheme } = useTheme();
  const [checked, setChecked] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    setChecked(theme === 'dark');
  }, [theme]);

  useKeyCommand('ctrl+t', () => changeTheme());

  return (
    <CircleToggle
      checked={checked}
      handleClick={changeTheme}
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
  );
};

export default ThemeToggle;
