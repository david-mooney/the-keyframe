import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Layout from '@components/layout';
import Container from '@components/container';
import PostBody from '@components/post/post-body';
import PostHeader from '@components/post/post-header';
import PostTitle from '@components/post/post-title';
import { getSinglePost, getAllPosts } from '@lib/api';
import markdownToHtml from '@lib/markdown-to-html';
import PostType from '@interfaces/post';

type Props = {
  post: PostType;
  preview?: boolean;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | The Keyframe`;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article className="mb-32">
            <Head>
              <title>{title}</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              readTime={post.readTime}
              tags={post.tags}
            />
            <PostBody content={post.content} />
          </article>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getSinglePost(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
