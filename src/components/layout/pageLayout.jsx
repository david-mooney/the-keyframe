import React from 'react';
import Header from './header';
import Controls from '../layout/controls';
import * as styles from './pageLayout.module.css';

const PageLayout = ({ title, children, css }) => (
  <>
    <Header title={title} />
    <main style={css} className={`animate-colors ${styles.main}`}>
      {children}
    </main>
    <Controls />
  </>
);

export default PageLayout;
