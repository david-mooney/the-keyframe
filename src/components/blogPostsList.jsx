import React from 'react';
import { motion } from 'framer-motion';
import PostCard from './postCard.jsx';
import SubscribeCard from './subscribeCard.jsx';
import * as styles from './blogPostsList.module.css';

const BlogPostsList = ({ posts }) => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.085,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: 'tween', duration: 0.5 } },
  };

  return (
    <motion.ol
      id="main"
      className={styles.list}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {posts.map(post => (
        <motion.li className={styles.item} variants={item} key={post.fields.slug}>
          <PostCard {...post} />
        </motion.li>
      ))}

      <motion.li className={styles.item} variants={item}>
        <SubscribeCard />
      </motion.li>
    </motion.ol>
  );
};

export default BlogPostsList;
