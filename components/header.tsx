import { useRouter } from 'next/router';
import Link from 'next/link';
import Search from './search';
import styles from './header.module.css';

interface HeadingProps {
  level: 1 | 2 | 3 | 5 | 6;
  children?: React.ReactNode;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const Header = ({ level = 1 }: HeadingProps) => {
  const Tag = `h${level}` as HeadingTag;
  const router = useRouter();
  const isHome = router.pathname === '/';

  const titleOnly = <Tag>The Keyframe</Tag>;

  const titleWithLink = (
    <Tag>
      <Link href="/" className="underline">
        The Keyframe
      </Link>
    </Tag>
  );

  return (
    <header className={styles.header} data-animate="true">
      <a className="skip-to-content underline" href="#main">
        Skip to content
      </a>
      <Search />

      {isHome ? titleOnly : titleWithLink}
    </header>
  );
};

export default Header;
