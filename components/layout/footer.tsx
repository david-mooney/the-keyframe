import getConfig from 'next/config';
import styles from '@components/layout/footer.module.css';

const { publicRuntimeConfig } = getConfig();

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.row}>
      <small className={styles.copyright}>
        All rights reserved © David Mooney {currentYear}
      </small>
      <small aria-hidden="true">Version: {publicRuntimeConfig?.version}</small>
    </div>
  </footer>
);

export default Footer;
