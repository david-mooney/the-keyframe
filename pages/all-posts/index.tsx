import Head from 'next/head';
import Container from '@components/container';
import Layout from '@components/layout';
import Search from '@components/search/search';
import AllPosts from '@components/all-posts';
import { SearchProvider } from '@hooks/use-search';
import { getAllPostPreviews, getAllTags } from '@lib/api';
import Post from '@interfaces/post';

type Props = {
  allPosts: Post[];
  allTags: string[];
};

export default function Index({ allPosts, allTags }: Props) {
  return (
    <Layout>
      <Head>
        <title>All Posts</title>
      </Head>

      <Container>
        <SearchProvider>
          <Search tags={allTags} />
          <AllPosts posts={allPosts} />
        </SearchProvider>
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allTags = getAllTags();
  const allPosts = getAllPostPreviews();

  return {
    props: {
      allPosts,
      allTags,
    },
  };
};
