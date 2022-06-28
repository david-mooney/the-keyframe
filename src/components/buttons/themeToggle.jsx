import React, { useState, useLayoutEffect } from 'react';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { BsMoon } from '@react-icons/all-files/bs/BsMoon';
import { CircleButton } from './circleButton.jsx';
import * as styles from './themeToggle.module.css';

const ThemeToggle = () => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    const isChecked = !checked;

    setChecked(isChecked);
    window.setTheme(isChecked ? window.themes.DARK : window.themes.LIGHT);
  };

  useLayoutEffect(() => {
    setChecked(window.theme === window.themes.DARK);
  }, []);

  return (
    <CircleButton label="Toggle dark mode" handleClick={handleClick}>
      <div className={`${styles.icon} ${styles.sun}`} data-active={!checked}>
        <FiSun />
      </div>

      <div className={`${styles.icon} ${styles.moon}`} data-active={checked}>
        <BsMoon />
      </div>
    </CircleButton>
  );
};

export default ThemeToggle;
