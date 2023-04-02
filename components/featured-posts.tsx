import { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import type Post from '@interfaces/post';
import styles from '@components/featured-posts.module.css';

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  const ref = useRef(null);
  const scrollX = useSpring(0, {
    stiffness: 100,
    damping: 20,
    mass: 0.2,
  });

  useEffect(() => {
    scrollX.on('change', (latest) => {
      ref.current.scrollLeft += latest;
      scrollX.set(0);
    });

    const onWheel = (event) => {
      // const delta = event.deltaY + event.deltaX;
      // scrollX.set(scrollX.get() + delta);

      ref.current.scrollLeft += event.deltaY + event.deltaX;
    };

    window.addEventListener('wheel', onWheel);
    return () => window.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <section className={styles.section}>
      <motion.ol className={styles.list} ref={ref}>
        {posts.map((post, index) => (
          <li key={post.slug}>
            <span>POST</span>
          </li>
        ))}
      </motion.ol>
    </section>
  );
};

export default FeaturedPosts;
