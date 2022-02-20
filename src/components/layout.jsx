import React from 'react';
import Header from './header';
import Footer from './footer';
import * as styles from './layout.module.css';

const Layout = ({ location, title, children }) => (
  <>
    <Header title={title} />
    <main className={styles.container}>{children}</main>
    <Footer />
  </>
);

export default Layout;
