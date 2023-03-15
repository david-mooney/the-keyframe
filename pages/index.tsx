import Head from 'next/head';
import FeaturedPosts from '@components/featured-posts';
import Layout from '@components/layout';
import { getAllPostPreviews } from '@lib/api';
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
  const [allPosts] = getAllPostPreviews();

  return {
    props: { allPosts },
  };
};
