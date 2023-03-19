import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './header.module.css';

interface HeadingProps {
  Level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: React.ReactNode;
}

const Anchor = ({ children }) => (
  <Link href="/" className="underline">
    {children}
  </Link>
);

const Header = ({ Level = 'h1' }: HeadingProps) => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const Element = isHome ? Level : Anchor;

  return (
    <header className={styles.header} data-animate="true">
      <a className="skip-to-content underline" href="#main">
        Skip to content
      </a>

      <Element>
        <span>The</span>
        <span>&nbsp;</span>
        <span>Key</span>
        <span>frame</span>
      </Element>
    </header>
  );
};

export default Header;
