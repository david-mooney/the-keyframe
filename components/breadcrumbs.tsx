import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
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
          <span className={styles.icon}>
            <BsArrowLeft size="100%" />
          </span>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ol>
  </nav>
);

export default breadcrumbs;
