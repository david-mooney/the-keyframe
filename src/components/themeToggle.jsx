import React, { useCallback, useState } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

const ThemeToggle = () => {
  const [checked, setChecked] = useState(window.theme === window.themes.DARK);

  const onChange = useCallback(
    event => {
      const isChecked = event.target.checked;
      setChecked(isChecked);
      window.setTheme(isChecked ? window.themes.DARK : window.themes.LIGHT);
    },
    [setChecked]
  );

  return <Toggle checked={checked} onChange={onChange} />;
};

export default ThemeToggle;
