import React from 'react';
import PropTypes from 'prop-types';
import useTheme from '@hooks/useTheme';

const ThemeContext = React.createContext({
  darkMode: null,
  toggleDarkMode: () => {},
});

const ThemeWrapper = ({ element }) => {
  const [darkMode, setDarkMode] = useTheme(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {typeof darkMode === `boolean` && element}
    </ThemeContext.Provider>
  );
};

ThemeWrapper.propTypes = {
  element: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default ThemeContext;

export { ThemeWrapper };
