import React from 'react';
import Navigation from './navigation';
import Header from './header';
import Controls from './controls';
import * as styles from './pageLayout.module.css';

const PageLayout = ({ title, children, css }) => (
  <>
    <Navigation />
    <Header title={title} />
    <main style={css} className={styles.main}>
      {children}
    </main>
    <Controls />
  </>
);

export default PageLayout;
