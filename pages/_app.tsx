import { StrictMode } from 'react';
import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
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
  const router = useRouter();
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
      <AnimatePresence mode="wait" initial={false}>
        {/* TODO - can use popLayout if this is wrapped in forwardRef */}
        <Component {...pageProps} key={router.pathname} />
      </AnimatePresence>
    </StrictMode>
  );
}
