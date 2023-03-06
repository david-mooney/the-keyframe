import { useRouter } from 'next/router';
import Link from 'next/link';
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

  const titleOnly = (
    <Tag>
      <span>The</span>
      <span>&nbsp;</span>
      <span>Key</span>
      <span>frame</span>
    </Tag>
  );

  const titleWithLink = (
    <Tag>
      <Link href="/" className="underline">
        <span>The</span>
        <span>&nbsp;</span>
        <span>Key</span>
        <span>frame</span>
      </Link>
    </Tag>
  );

  return (
    <header className={styles.header} data-animate="true">
      <a className="skip-to-content underline" href="#main">
        Skip to content
      </a>

      {isHome ? titleOnly : titleWithLink}
    </header>
  );
};

export default Header;
