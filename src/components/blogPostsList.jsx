import React from 'react';
import { motion } from 'framer-motion';
import PostCard from './postCard.jsx';
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

  return (
    <motion.ol
      id="main"
      className={styles.list}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {posts.map(post => (
        <PostCard {...post} />
      ))}
    </motion.ol>
  );
};

export default BlogPostsList;
