import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ title, css, children }) => (
  <>
    <Header title={title} />
    <main style={css}>{children}</main>
    <Footer />
  </>
);

export default Layout;
