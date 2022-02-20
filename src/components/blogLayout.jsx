import React from 'react';
import Header from './header';
import Footer from './footer';
import * as styles from './layout.module.css';

const Layout = ({ title, children }) => (
  <>
    <Header title={title} />
    <main className={styles.blog}>{children}</main>
    <Footer />
  </>
);

export default Layout;
