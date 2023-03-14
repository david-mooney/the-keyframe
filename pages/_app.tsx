import { AppProps } from 'next/app';
import localFont from 'next/font/local';
import {
  BsHouseFill,
  BsGithub,
  BsSearch,
  BsFillPaletteFill,
  BsEnvelopeFill,
} from 'react-icons/bs';

import { LINKS } from '@/lib/constants';
import Dock from '@/components/dock/dock';
import ThemeToggle from '@/components/circle-buttons/theme-toggle';
import CircleLink from '@/components/circle-buttons/circle-link';

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

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-family-sans: ${sansFont.style.fontFamily};
        }
      `}</style>

      <Dock>
        <CircleLink {...LINKS.home}>
          <BsHouseFill size="50%" />
        </CircleLink>
        <CircleLink {...LINKS.posts}>
          <BsSearch size="50%" />
        </CircleLink>
        <CircleLink {...LINKS.portfolio}>
          <BsFillPaletteFill size="50%" />
        </CircleLink>
        <CircleLink {...LINKS.email}>
          <BsEnvelopeFill size="50%" />
        </CircleLink>
        <CircleLink {...LINKS.github} newTab>
          <BsGithub size="50%" />
        </CircleLink>
        <ThemeToggle />
      </Dock>
      <Component {...pageProps} />
    </>
  );
}
