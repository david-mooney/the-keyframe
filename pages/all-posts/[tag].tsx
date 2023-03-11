import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '@components/container';
import PostHeader from '@components/post/post-header';
import Layout from '@components/layout';
import { getPostsByTag, getAllTags } from '@lib/api';
import type PostType from '@interfaces/post';

type Props = {
  posts: PostType[];
  preview?: boolean;
};

export default function Post({ posts, preview }: Props) {
  const router = useRouter();

  if (!router.isFallback && posts.length === 0) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <article>
          <Head>
            <title>The Keyframe blog tags.</title>
          </Head>
        </article>
        {posts.map((post) => (
          <article key={post.slug}>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              readTime={post.readTime}
              tags={post.tags}
            />
          </article>
        ))}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    tag: string;
  };
};

export async function getStaticProps({ params }: Params) {
  // TODO requesting each field sucks, make a function that returns all fields or preview fields
  const posts = getPostsByTag(params.tag, [
    'title',
    'date',
    'author',
    'slug',
    'ogImage',
    'coverImage',
    'tags',
  ]);

  return {
    props: {
      title: `Posts tagged with ${params.tag}`,
      description: `Posts on web development related to ${params.tag}`,
      posts,
    },
  };
}

export function getStaticPaths() {
  const tags = getAllTags();

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag,
        },
      };
    }),
    fallback: false,
  };
}
