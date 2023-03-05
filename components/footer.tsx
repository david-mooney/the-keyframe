import Subscribe from './subscribe';
import styles from './footer.module.css';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Subscribe />

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
