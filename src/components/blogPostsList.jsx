import React from 'react';
import PostCard from './postCard.jsx';
import * as styles from './blogPostsList.module.css';

const BlogPostsList = ({ posts }) => (
  <ol id="main" className={styles.list}>
    {posts.map(post => (
      <PostCard {...post} />
    ))}
  </ol>
);

export default BlogPostsList;
