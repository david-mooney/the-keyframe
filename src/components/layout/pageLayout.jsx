import React from 'react';
import Navigation from './navigation';
import Controls from './controls';
import * as styles from './pageLayout.module.css';

const PageLayout = ({ data, children }) => (
  <>
    <Navigation />
    <main className={styles.main}>{children}</main>
    <Controls />
  </>
);

export default PageLayout;
