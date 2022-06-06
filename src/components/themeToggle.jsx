import React, { useCallback, useState } from 'react';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { BsMoon } from '@react-icons/all-files/bs/BsMoon';
import CircleButton from './circleButton';
import * as styles from './themeToggle.module.css';

const ThemeToggle = () => {
  const id = 'themeToggle';
  const height = '50%';
  const width = '50%';
  const [checked, setChecked] = useState(window.theme === window.themes.DARK);

  const handleChange = useCallback(
    event => {
      const isChecked = event.target.checked;
      setChecked(isChecked);
      window.setTheme(isChecked ? window.themes.DARK : window.themes.LIGHT);
    },
    [setChecked]
  );

  return (
    <CircleButton label={id}>
      <div className={`${styles.icon} ${styles.sun}`} data-active={!checked}>
        <FiSun style={{ height, width }} />
      </div>

      <div className={`${styles.icon} ${styles.moon}`} data-active={checked}>
        <BsMoon style={{ height, width }} />
      </div>

      <input
        id={id}
        className="sr-only"
        type="checkbox"
        defaultChecked={checked}
        onChange={handleChange}
        aria-label="Toggle Dark Mode"
      />
    </CircleButton>
  );
};

export default ThemeToggle;
