import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body data-animate="true">
        <Script id="themeToggle" strategy="beforeInteractive">
          {`
            const themes = {
              LIGHT: 'light',
              DARK: 'dark',
            };

            function getTheme() {
              const savedTheme = window.localStorage.getItem('__theme');
              const osTheme = window.matchMedia('(prefers-color-scheme: dark)');

              if (typeof savedTheme === 'string') {
                return savedTheme;
              }

              if (typeof osTheme.matches === 'boolean') {
                return osTheme.matches ? themes.DARK : themes.LIGHT;
              }

              return themes.LIGHT;
            }

            (function () {
              window.__theme = getTheme();
              window.__themes = themes;
              document.documentElement.classList.add(window.__theme);
            })();
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
