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

// class ThemeWrapper extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { darkMode: null };
//     this.toggleDarkMode = this.toggleDarkMode.bind(this);
//   }

//   componentDidMount() {
//     const storedState = getItem(storageId);

//     if (typeof storedState === 'boolean') {
//       this.setDarkMode(storedState);
//     } else {
//       this.setDarkMode(
//         window.matchMedia('(prefers-color-scheme: dark)').matches
//       );
//     }
//   }

//   toggleDarkMode = () => {
//     const { darkMode } = this.state;

//     setItem(storageId, !darkMode);
//     this.setState({ darkMode: !darkMode });
//   };

//   setDarkMode = value => {
//     this.setState({ darkMode: !!value });
//   };

//   render() {
//     const { darkMode } = this.state;
//     const { element } = this.props;

//     return (
//       <ThemeContext.Provider
//         value={{
//           darkMode,
//           toggleDarkMode: this.toggleDarkMode,
//         }}
//       >
//         {typeof darkMode === `boolean` && element}
//       </ThemeContext.Provider>
//     );
//   }
// }
