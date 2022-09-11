import React from 'react';
import Navigation from './navigation';
import Controls from './controls';
import * as styles from './pageLayout.module.css';

const PageLayout = ({ children, path }) => (
  <>
    <Navigation />
    <main className={styles.main} data-path={path}>
      {children}
    </main>
    <Controls />
  </>
);

export default PageLayout;
