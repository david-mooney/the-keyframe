import Head from 'next/head';
import FeaturedPosts from '@components/featured-posts';
import PostsTimeline from '@components/posts-timeline';
import Header from '@components/layout/header';
import Layout from '@components/layout/layout';
import Container from '@components/layout/container';
import Subscribe from '@components/subscribe';
import { getAllPostPreviews } from '@lib/api';
import Post from '@interfaces/post';

type Props = {
  allPosts: Post[];
  featuredPosts: Post[];
};

export default function Index({ allPosts, featuredPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>The Keyframe</title>
      </Head>

      <Container wide>
        <Header level={1} />
        <h2>Featured Posts</h2>
        <FeaturedPosts posts={featuredPosts} />
      </Container>

      <Subscribe />

      <Container wide>
        <h2>Latest Posts</h2>
        <PostsTimeline posts={allPosts} />
      </Container>
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
