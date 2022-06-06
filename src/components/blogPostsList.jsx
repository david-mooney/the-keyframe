import React from 'react';
import PostCard from './cards/postCard.jsx';
import SubscribeCard from './cards/subscribeCard.jsx';
import * as styles from './blogPostsList.module.css';

const BlogPostsList = ({ posts }) => (
  <ol id="main" className={styles.list}>
    {posts.map(post => (
      <li className={styles.item} key={post.fields.slug}>
        <PostCard {...post} />
      </li>
    ))}

    <li className={styles.item}>
      <SubscribeCard />
    </li>
  </ol>
);

export default BlogPostsList;
