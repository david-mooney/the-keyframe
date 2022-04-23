import React from 'react';

import * as footer from './footer.module.css';

const Footer = () => {
  return (
    <footer className={footer.footer}>
      <ul>
        <li className={footer.fullWidth}>
          <small>All rights reserved © David Mooney {new Date().getFullYear()}</small>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
