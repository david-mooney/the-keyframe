import Head from 'next/head';
import FeaturedPosts from '@components/featured-posts';
import Header from '@components/layout/header';
import Layout from '@components/layout/layout';
import { getAllPostPreviews } from '@lib/api';
import Post from '@interfaces/post';

type Props = {
  allPosts: Post[];
  featuredPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>The Keyframe</title>
      </Head>

      <Header Level="h1" />
      <FeaturedPosts posts={allPosts} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const [allPosts] = getAllPostPreviews();
  const featuredPosts = (allPosts as Post[]).filter(
    (post) => post.featured === true
  );

  return {
    props: {
      allPosts,
      featuredPosts,
    },
  };
};
