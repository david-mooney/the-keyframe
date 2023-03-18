import getConfig from 'next/config';
import styles from '@components/layout/footer.module.css';

const { publicRuntimeConfig } = getConfig();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <small className={styles.copyright}>
          All rights reserved © David Mooney {new Date().getFullYear()}
        </small>
        <small aria-hidden="true">
          Version: {publicRuntimeConfig?.version}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
