import Meta from '@components/meta';
import Alert from '@components/alert';
import Footer from '@components/layout/footer';
import DynamicFooter from '@components/layout/dynamic-footer';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      {preview && <Alert />}
      <div id="page-wrapper">
        <main id="main">{children}</main>
        <Footer />
      </div>
      <DynamicFooter />
    </>
  );
};

export default Layout;
