import * as React from 'react';
import Header from './header';
import Footer from './footer';

function Layout({ location, title, children }) {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <>
      <Header title={title} />
      <main className="page-wrapper">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
