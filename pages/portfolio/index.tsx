import Head from 'next/head';
import Container from '@components/layout/container';
import Layout from '@components/layout/layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Container>
        <h1>Portfolio Page</h1>
        <p>Coming soon...</p>
      </Container>
    </Layout>
  );
}
