import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import GlobalComponents from '@components/global-components';

import '@styles/accessibility.css';
import '@styles/animations.css';
import '@styles/colors.css';
import '@styles/typography.css';
import '@styles/layout.css';
import '@styles/index.css';

const sansFont = localFont({
  src: [
    {
      path: '../assets/wotfard-regular.woff2',
      weight: '400',
    },
  ],
  fallback: ['Helvetica', 'ui-sans-serif'],
});

export default function TheKeyframe({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-family-sans: ${sansFont.style.fontFamily};
        }
      `}</style>

      <GlobalComponents />
      <Component {...pageProps} />
    </>
  );
}
