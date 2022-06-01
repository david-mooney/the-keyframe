import React from 'react';
import Header from './header';

import * as styles from './blogLayout.module.css';

const Layout = ({ title, css, children }) => (
  <>
    <Header title={title} />
    <main className={styles.main} style={css}>
      {children}
    </main>
  </>
);

export default Layout;
