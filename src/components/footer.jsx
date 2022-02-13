import React from 'react';

import ScrollToTop from './scrollToTop';
import * as footer from './footer.module.css';

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <ul>
        <li className={footer.fullWidth}>© {new Date().getFullYear()}</li>
        <li>
          <ScrollToTop />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
