import Head from 'next/head';
import Container from '@components/container';
import Layout from '@components/layout';
import Search from '@components/search/search';
import AllPosts from '@components/all-posts';
import { SearchProvider } from '@hooks/use-search';
import { getAllPostPreviews, getAllTags } from '@lib/api';
import Post from '@interfaces/post';

type Props = {
  posts: Post[];
  allTags: string[];
  query?: {
    q: string;
  };
};

export default function Index({ posts, allTags, query }: Props) {
  return (
    <Layout>
      <Head>
        <title>All Posts</title>
      </Head>

      <Container>
        <SearchProvider initialQuery={query?.q}>
          <Search tags={allTags} />
          <AllPosts posts={posts} />
        </SearchProvider>
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const allTags = getAllTags();
  const posts = getAllPostPreviews(query?.q);

  return {
    props: {
      posts,
      allTags,
      query,
    },
  };
};
