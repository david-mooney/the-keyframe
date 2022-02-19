import * as React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ location, title, children }) => (
  <>
    <Header title={title} />
    <main className="page-wrapper">{children}</main>
    <Footer />
  </>
);

export default Layout;
