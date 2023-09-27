import getConfig from 'next/config';
import styles from '@components/layout/footer.module.css';

const { publicRuntimeConfig } = getConfig();
const copyright = `All rights reserved © David Mooney ${new Date().getFullYear()}`;
const version = `Version: ${publicRuntimeConfig?.version}`;

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.row}>
      <small className={styles.copyright}>{copyright}</small>
      <small aria-hidden="true">{version}</small>
    </div>
  </footer>
);

export default Footer;
