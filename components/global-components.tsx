import dynamic from 'next/dynamic';
import Router from 'next/router';
import { useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
import { BsHouseFill, BsFillPaletteFill } from 'react-icons/bs';
import { LINKS } from '@/lib/constants';
import Dock from '@/components/dock/dock';
import CircleLink from '@/components/circle-buttons/circle-link';
import SearchButton from '@components/search/search-button';
// import CommandButton from '@components/command-palette/command-button';
import useKeyCommand from '@/hooks/use-key-command';
import { ThemeProvider } from '@/hooks/use-theme';

const ThemeToggle = dynamic(
  () => import('@/components/circle-buttons/theme-toggle'),
  { ssr: false }
);

// const CommandPalette = dynamic(
//   () => import('@/components/command-palette/command-palette'),
//   { ssr: false }
// );

const GlobalComponents = () => {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useKeyCommand('Escape', () => setPaletteOpen(false));
  useKeyCommand('meta+k,ctrl+k', () => setPaletteOpen(!paletteOpen));
  useKeyCommand('/', () => setPaletteOpen(!paletteOpen));

  Router.events.on('routeChangeComplete', () => setPaletteOpen(false));

  return (
    <ThemeProvider>
      <Dock>
        <CircleLink {...LINKS.home}>
          <BsHouseFill size="50%" />
        </CircleLink>
        <SearchButton />
        <CircleLink {...LINKS.portfolio}>
          <BsFillPaletteFill size="50%" />
        </CircleLink>
        <ThemeToggle />
      </Dock>

      {/* TODO - this is a nice pattern, but maybe not needed */}
      {/* <AnimatePresence>
        {paletteOpen && <CommandPalette close={() => setPaletteOpen(false)} />}
      </AnimatePresence> */}
    </ThemeProvider>
  );
};

export default GlobalComponents;
