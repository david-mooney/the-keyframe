import { AppProps } from 'next/app';
import localFont from 'next/font/local';

import {
  BsHouseFill,
  BsGithub,
  BsFillTagsFill,
  BsEnvelopeFill,
} from 'react-icons/bs';
import Dock from '../components/dock/dock';
import ThemeToggle from '../components/circle-buttons/theme-toggle';
import CircleLink from '../components/circle-buttons/circle-link';

import '../styles/accessibility.css';
import '../styles/animations.css';
import '../styles/colors.css';
import '../styles/typography.css';
import '../styles/layout.css';
import '../styles/index.css';

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
        <CircleLink label="Home" href="/">
          <BsHouseFill size="50%" />
        </CircleLink>
        <CircleLink label="Tags" href="/tags">
          <BsFillTagsFill size="50%" />
        </CircleLink>
        <CircleLink label="Email" href="mailto:thekeyframe@gmail.com">
          <BsEnvelopeFill size="50%" />
        </CircleLink>
        <CircleLink
          label="Github"
          href="https://github.com/david-mooney/nextjs-blog"
          newTab
        >
          <BsGithub size="50%" />
        </CircleLink>
        <ThemeToggle />
      </Dock>
      <Component {...pageProps} />
    </>
  );
}
