import { useState } from 'react';
import Head from 'next/head';
import Container from '@components/container';
import Layout from '@components/layout';
import Search from '@components/inputs/search';
import { getAllPosts, getAllTags } from '@lib/api';
import { CMS_NAME } from '@lib/constants';
import Post from '@interfaces/post';

type Props = {
  allPosts: Post[];
  allTags: string[];
};

export default function Index({ allPosts, allTags }: Props) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tagCounts = allPosts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      if (acc[tag]) {
        acc[tag] += 1;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {} as { [key: string]: number });

  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>

      <Container>
        <Search />

        {allTags.map((tag) => (
          <div key={tag}>
            <input
              type="checkbox"
              id={tag}
              name={tag}
              value={tag}
              checked={selectedTags.includes(tag)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedTags([...selectedTags, e.target.value]);
                } else {
                  setSelectedTags(
                    selectedTags.filter((t) => t !== e.target.value)
                  );
                }
              }}
            />
            <label htmlFor={tag}>{tag}</label>
            <span>({tagCounts[tag]})</span>
          </div>
        ))}

        {allPosts
          .filter((post) => {
            if (selectedTags.length) {
              return selectedTags.find((tag) => post.tags.includes(tag));
            }
            return true;
          })
          .map((post, index) => (
            <div key={post.slug}>
              <h2>
                {index + 1}. {post.title}
              </h2>
              <p>{post.excerpt}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {post.tags.map((tag) => (
                  <span
                    style={{ paddingRight: '1rem', fontWeight: 'bold' }}
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allTags = getAllTags();
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'readTime',
    'tags',
  ]);

  return {
    props: {
      allPosts,
      allTags,
    },
  };
};
