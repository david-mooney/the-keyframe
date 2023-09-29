import { useRef } from 'react';
import PostPreview from '@components/post-preview';
import type Post from '@interfaces/post';
import styles from '@components/featured-posts.module.css';

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  const wrapper = useRef(null);

  return (
    <section className={styles.section}>
      <ol className={styles.list} ref={wrapper} id="horiz">
        {posts.map((post, index) => (
          <li key={post.slug}>
            <PostPreview
              order={index}
              title={post.title}
              coverImage={post.coverImage}
              created={post.created}
              slug={post.slug}
              readTime={post.readTime}
            />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default FeaturedPosts;
