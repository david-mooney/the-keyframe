import React from 'react';
import PostCard from './cards/postCard.jsx';
import * as styles from './postFooter.module.css';

const PostFooter = ({ data }) => (
  <nav className={styles.container} title="Blog posts navigation">
    <ul className={styles.list}>
      <li>{data.previous && <PostCard {...data.previous} />}</li>
      <li>{data.next && <PostCard {...data.next} />}</li>
    </ul>
  </nav>
);

export default PostFooter;
