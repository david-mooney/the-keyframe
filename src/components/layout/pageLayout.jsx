import React from 'react';
import Header from './header';

import * as styles from './pageLayout.module.css';

const PageLayout = ({ title, children }) => (
  <>
    <Header title={title} />
    <main className={styles.main}>{children}</main>
  </>
);

export default PageLayout;
