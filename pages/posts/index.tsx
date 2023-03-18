import Head from 'next/head';
import Container from '@components/layout/container';
import Layout from '@components/layout/layout';
import Search from '@components/search/search';
import AllPosts from '@components/all-posts';
import { SearchProvider } from '@hooks/use-search';
import { getAllPostPreviews, getAllTags } from '@lib/api';
import Post from '@interfaces/post';

type Props = {
  posts: Post[];
  initialResults: Post[] | null;
  allTags: string[];
  query?: {
    q: string;
  };
};

export default function Index({
  posts,
  allTags,
  query,
  initialResults,
}: Props) {
  return (
    <Layout>
      <Head>
        <title>All Posts</title>
      </Head>

      <Container>
        <SearchProvider initialResults={initialResults} initialQuery={query?.q}>
          <Search tags={allTags} />
          <AllPosts posts={posts} />
        </SearchProvider>
      </Container>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const allTags = getAllTags();
  const [posts, initialResults] = getAllPostPreviews(query?.q);

  return {
    props: {
      posts,
      initialResults,
      allTags,
      query,
    },
  };
};
