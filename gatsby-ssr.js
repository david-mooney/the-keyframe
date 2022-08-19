const React = require('react');
const Layout = require('./src/components/layout/pageLayout').default;

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
      return null;
    }
  };

  const osTheme = () => {
    try {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? window.themes.DARK
        : window.themes.LIGHT;
    } catch (error) {
      return window.themes.LIGHT;
    }
  };

  window.setTheme = (theme = null) => {
    const savedTheme = getSavedTheme();

    window.theme = theme || savedTheme || osTheme();
    document.documentElement.classList.remove(
      window.themes.LIGHT,
      window.themes.DARK
    );
    document.documentElement.classList.add(window.theme);

    if (window.theme !== savedTheme) {
      saveTheme(window.theme);
    }
  };

  window.setTheme();
};

exports.onRenderBody = ({
  setHtmlAttributes,
  setHeadComponents,
  setBodyAttributes,
}) => {
  setHtmlAttributes({
    lang: 'en',
  });

  setBodyAttributes({
    'data-animate': true,
  });

  setHeadComponents([
    <script
      key="theme-script"
      dangerouslySetInnerHTML={{
        __html: `(${html.toString()})()`,
      }}
    />,
  ]);
};

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
