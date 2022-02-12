const React = require('react');

const html = () => {
  window.themes = {
    LIGHT: '-light',
    DARK: '-dark',
  };

  const saveTheme = theme => {
    try {
      localStorage.setItem('preferred-theme', theme);
    } catch (error) {
      return null;
    }
  };

  const getSavedTheme = () => {
    try {
      return localStorage.getItem('preferred-theme');
    } catch (error) {
      return window.themes.LIGHT;
    }
  };

  const findTheme = () => {
    try {
      const theme = window.matchMedia('(prefers-color-scheme: dark)').matches && window.themes.DARK;
      saveTheme(theme);
      return theme;
    } catch (error) {
      return window.themes.LIGHT;
    }
  };

  window.setTheme = (theme = getSavedTheme() || findTheme()) => {
    window.theme = theme;
    document.documentElement.classList.remove(window.themes.LIGHT, window.themes.DARK);
    document.documentElement.classList.add(theme);
  };

  window.setTheme();
};

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="theme-script"
      dangerouslySetInnerHTML={{
        __html: `(${html.toString()})()`,
      }}
    />,
  ]);
};
