import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Layout from '@components/layout';
import Container from '@components/container';
import PostBody from '@components/post/post-body';
import PostHeader from '@components/post/post-header';
import PostTitle from '@components/post/post-title';
import TableOfContents from '@components/table-of-contents/table-of-contents';
import { getSinglePost, getAllPosts } from '@lib/api';
import markdownToHtml from '@lib/markdown-to-html';
import PostType from '@interfaces/post';

type Props = {
  post: PostType;
  preview?: boolean;
};

type Section = {
  element: HTMLElement;
  title: string;
};

export default function Post({ post, preview }: Props) {
  const router = useRouter();
  const [sections, setSections] = useState<Section[]>([]);
  const title = `${post.title} | The Keyframe`;

  useEffect(() => {
    const sections = [...document.querySelectorAll('h2')];

    // TODO should be the whole section, not just the title
    const postSections = sections.map((section) => ({
      element: section,
      title: section.innerText,
    }));

    setSections(postSections);
  }, []);

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
              created={post.created}
              updated={post.updated}
              author={post.author}
              readTime={post.readTime}
              tags={post.tags}
            />
            <TableOfContents sections={sections} />
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
