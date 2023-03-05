import Alert from './alert';
import Header from './header';
import Footer from './footer';
import Meta from './meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header level={1} />
      {preview && <Alert />}
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
