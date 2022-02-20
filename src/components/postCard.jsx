import { Link } from 'gatsby';
import React from 'react';
import * as styles from './postCard.module.css';

const PostCard = ({ frontmatter, fields, timeToRead }) => (
  <li key={fields.slug} className={styles.list}>
    <Link to={fields.slug} itemProp="url">
      <article
        className={styles.card}
        style={{ backgroundColor: frontmatter.color }}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <small>{frontmatter.date}</small>
          <h2 itemProp="headline">{frontmatter.title || fields.slug}</h2>
          <small className={styles.readTime}>{timeToRead} min read</small>
        </header>

        <div className={styles.placeholder}></div>
      </article>
    </Link>
  </li>
);

export default PostCard;
