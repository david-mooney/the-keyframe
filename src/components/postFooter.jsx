import React from 'react';
import PostCard from './cards/postCard.jsx';
import * as styles from './postFooter.module.css';

const PostFooter = ({ data }) => {
  const { previous, next } = data;

  return (
    <nav className={styles.container} title="Blog posts navigation">
      <ul className={styles.list}>
        <li>{previous && <PostCard {...previous} />}</li>
        <li>{next && <PostCard {...next} />}</li>
      </ul>
    </nav>
  );
};

export default PostFooter;
