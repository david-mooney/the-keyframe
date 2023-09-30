import dynamic from 'next/dynamic';
import { BsHouseFill, BsFillPaletteFill, BsInfoLg } from 'react-icons/bs';
import { LINKS } from '@/lib/constants';
import Dock from '@/components/dock/dock';
import CircleLink from '@/components/circle-buttons/circle-link';
import SearchButton from '@components/search/search-button';
import { ThemeProvider } from '@/hooks/use-theme';

const ThemeToggle = dynamic(
  () => import('@/components/circle-buttons/theme-toggle'),
  { ssr: false }
);

const GlobalComponents = () => (
  <ThemeProvider>
    <Dock>
      <CircleLink {...LINKS.home}>
        <BsHouseFill size="50%" />
      </CircleLink>
      <CircleLink {...LINKS.portfolio}>
        <BsFillPaletteFill size="50%" />
      </CircleLink>
      <CircleLink {...LINKS.privacy}>
        <BsInfoLg size="50%" />
      </CircleLink>
      <SearchButton />
      <ThemeToggle />
    </Dock>
  </ThemeProvider>
);

export default GlobalComponents;
