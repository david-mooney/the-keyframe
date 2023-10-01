import Link from 'next/link';
import styles from './command-palette.module.css';

const Links = () => (
  <ul className={styles.list} title="Internal Links">
    <li className={styles.item}>
      <Link href="/">Home</Link>
    </li>
    <li className={styles.item}>
      <Link href="/portfolio">Portfolio</Link>
    </li>
    <li className={styles.item}>
      <Link href="/privacy">Privacy Policy</Link>
    </li>
  </ul>
);

export default Links;
