import React from 'react';
import { useHits } from 'react-instantsearch-hooks-web';
import PostCard from './cards/postCard.jsx';
import SubscribeCard from './cards/subscribeCard.jsx';
import * as styles from './blogPostsList.module.css';

const BlogPostsList = ({ posts }) => {
  const { hits, results } = useHits();
  let filteredPosts = posts;

  const renderList = () => {
    if (results.query) {
      filteredPosts = posts.filter(post => hits.find(hit => hit.slug === post.fields.slug));
    }

    if (filteredPosts.length === 0) {
      return (
        <li>
          <p>Sorry, I couldn't find any posts. Here's a joke instead:</p>
          <h5>I was gonna tell a time traveling joke but you didn't like it</h5>
        </li>
      );
    }

    return filteredPosts.map(post => (
      <li className={styles.item} key={post.fields.slug}>
        <PostCard {...post} />
      </li>
    ));
  };

  return (
    <ol id="main" className={styles.list}>
      {renderList()}

      <li className={styles.item}>
        <SubscribeCard />
      </li>
    </ol>
  );
};

export default BlogPostsList;
