import Link from 'next/link';
import styles from './breadcrumbs.module.css';

type LinkProp = {
  href: string;
  label: string;
};

const breadcrumbs = ({ links }: { links: LinkProp[] }) => (
  <nav className={styles.nav}>
    <ol className={styles.breadcrumbs}>
      {links.map(({ href, label }) => (
        <li className={styles.crumb} key={label}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ol>
  </nav>
);

export default breadcrumbs;
