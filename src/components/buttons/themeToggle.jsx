import React, { useCallback, useState, useEffect } from 'react';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { BsMoon } from '@react-icons/all-files/bs/BsMoon';
import { circle } from './circleButton.module.css';
import * as styles from './themeToggle.module.css';

const ThemeToggle = () => {
  const id = 'themeToggle';
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback(
    event => {
      const isChecked = event.target.checked;
      setChecked(isChecked);
      window.setTheme(isChecked ? window.themes.DARK : window.themes.LIGHT);
    },
    [setChecked]
  );

  useEffect(() => {
    setChecked(window.theme === window.themes.DARK);
  }, []);

  return (
    <label labelfor={id} className={circle}>
      <div className={`${styles.icon} ${styles.sun}`} data-active={!checked}>
        <FiSun />
      </div>

      <div className={`${styles.icon} ${styles.moon}`} data-active={checked}>
        <BsMoon />
      </div>

      <input
        id={id}
        type="checkbox"
        className="sr-only"
        aria-label="Toggle dark mode"
        defaultChecked={checked}
        onChange={handleChange}
      />
    </label>
  );
};

export default ThemeToggle;
