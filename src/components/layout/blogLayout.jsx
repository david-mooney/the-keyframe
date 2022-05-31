import React from 'react';
import Header from './header';

const Layout = ({ title, css, children }) => (
  <>
    <Header title={title} />
    <main style={css}>{children}</main>
  </>
);

export default Layout;
