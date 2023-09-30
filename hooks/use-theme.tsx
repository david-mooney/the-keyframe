import { useState, useEffect, createContext, useContext } from 'react';

type Theme = {
  theme: string;
  changeTheme: () => void;
};

const ThemeContext = createContext<Theme | null>({
  theme: 'light',
  changeTheme: () => void 0,
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const theme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light';
    setTheme(theme);
  }, [theme]);

  const changeTheme = () => {
    const root = window.document.documentElement;
    const isDark = root.classList.contains('dark');

    root.classList.replace(
      isDark ? 'dark' : 'light',
      isDark ? 'light' : 'dark'
    );

    window.localStorage.setItem('__theme', isDark ? 'light' : 'dark');
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
