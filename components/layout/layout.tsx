import Meta from '@components/meta';
import Alert from '@components/alert';
import Footer from '@components/layout/footer';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      {preview && <Alert />}
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
