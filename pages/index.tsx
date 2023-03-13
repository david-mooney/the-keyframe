import Head from 'next/head';
import FeaturedPosts from '@components/featured-posts';
import Layout from '@components/layout';
import { getAllPosts } from '@lib/api';
import { FIELDS } from '@lib/constants';
import Post from '@interfaces/post';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>The Keyframe</title>
      </Head>

      <FeaturedPosts posts={allPosts} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(FIELDS.preview);

  console.log({ allPosts });
  return {
    props: { allPosts },
  };
};
