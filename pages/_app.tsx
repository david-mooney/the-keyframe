import { StrictMode } from 'react';
import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { LayoutGroup } from 'framer-motion';
import GlobalComponents from '@components/global-components';
import usePreserveScroll from '@hooks/use-preserve-scroll';

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
  usePreserveScroll();

  // TODO - MotionConfig

  return (
    <StrictMode>
      <style jsx global>{`
        :root {
          --font-family-sans: ${sansFont.style.fontFamily};
        }
      `}</style>

      <GlobalComponents />
      {/* <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence> */}
      <LayoutGroup>
        <Component {...pageProps} />
      </LayoutGroup>
    </StrictMode>
  );
}
