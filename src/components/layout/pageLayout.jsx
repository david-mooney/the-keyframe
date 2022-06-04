import React from 'react';
import Header from './header';

import * as styles from './pageLayout.module.css';

const PageLayout = ({ title, children, css }) => (
  <>
    <Header title={title} />
    <main className={`animate-colors ${styles.main}`} style={css}>
      {children}
    </main>
  </>
);

export default PageLayout;
