import Container from '@components/container';
import AllPosts from '@components/all-posts';
import Layout from '@components/layout';
import { getAllPosts } from '@lib/api';
import Head from 'next/head';
import { CMS_NAME, FIELDS } from '@lib/constants';
import Post from '@interfaces/post';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>

      <Container>
        <AllPosts posts={allPosts} />
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(FIELDS.preview);

  return {
    props: { allPosts },
  };
};
