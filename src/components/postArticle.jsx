import React, { useRef } from 'react';
import ProgressBar from '../components/progressBar';
import Bio from '../components/bio';
import * as styles from './postArticle.module.css';

const PostArticle = ({ post }) => {
  const postRef = useRef(null);

  return (
    <article
      itemScope
      id="main"
      ref={postRef}
      className={styles.article}
      itemType="http://schema.org/Article"
    >
      <ProgressBar ref={postRef} />

      <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
        aria-labelledby="main-title"
      />

      <footer>
        <Bio />
      </footer>
    </article>
  );
};

export default PostArticle;
