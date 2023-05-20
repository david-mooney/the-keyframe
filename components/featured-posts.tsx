import Lenis from '@studio-freight/lenis';
import { useRef, useEffect } from 'react';
import PostPreview from '@components/post-preview';
import type Post from '@interfaces/post';
import styles from '@components/featured-posts.module.css';

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  const wrapper = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      wrapper: wrapper.current,
      orientation: 'horizontal',
      gestureOrientation: 'both',
      lerp: 0.09,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return (
    <section className={styles.section}>
      <ol className={styles.list} ref={wrapper}>
        {posts.map((post, index) => (
          <li key={post.slug}>
            <PostPreview
              order={index}
              title={post.title}
              excerpt={post.excerpt}
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
