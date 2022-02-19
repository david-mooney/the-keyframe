import React from 'react';

import * as footer from './footer.module.css';

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <ul>
        <li className={footer.fullWidth}>© {new Date().getFullYear()}</li>
      </ul>
    </footer>
  );
};

export default Footer;
