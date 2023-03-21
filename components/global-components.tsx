import dynamic from 'next/dynamic';
import { useState } from 'react';
import {
  BsHouseFill,
  BsSearch,
  BsFillPaletteFill,
  BsUniversalAccess,
} from 'react-icons/bs';
import { LINKS } from '@/lib/constants';
import Dock from '@/components/dock/dock';
import CircleLink from '@/components/circle-buttons/circle-link';
import CommandButton from '@components/command-palette/command-button';
import useKeyCommand from '@/hooks/use-key-command';

const ThemeToggle = dynamic(
  () => import('@/components/circle-buttons/theme-toggle'),
  { ssr: false }
);

const CommandPalette = dynamic(
  () => import('@/components/command-palette/command-palette')
);

const GlobalComponents = () => {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useKeyCommand('Escape', () => setPaletteOpen(!paletteOpen));
  useKeyCommand('meta+k,ctrl+k', () => setPaletteOpen(!paletteOpen));

  return (
    <>
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
        <CircleLink href="" label="Accessibility">
          <BsUniversalAccess size="50%" />
        </CircleLink>
        <CommandButton setOpen={setPaletteOpen} />
        <ThemeToggle />
      </Dock>

      {paletteOpen && <CommandPalette close={() => setPaletteOpen(false)} />}
    </>
  );
};

export default GlobalComponents;
