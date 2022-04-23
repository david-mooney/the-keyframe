import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import ProgressBar from '../components/progressBar';
import Bio from '../components/bio';
import * as styles from './postArticle.module.css';

const PostArticle = ({ post }) => {
  const postRef = useRef(null);
  const enter = { opacity: 1 };
  const exit = { opacity: 0 };

  return (
    <motion.article
      itemScope
      id="main"
      ref={postRef}
      className={styles.article}
      itemType="http://schema.org/Article"
      initial={exit}
      animate={enter}
      exit={exit}
      transition={{ type: 'tween' }}
    >
      <ProgressBar ref={postRef} />
      <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
        aria-labelledby="main-title"
      />
      <hr />
      <footer>
        <Bio />
      </footer>
    </motion.article>
  );
};

export default PostArticle;
