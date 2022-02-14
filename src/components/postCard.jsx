import { Link } from 'gatsby';
import React from 'react';

import * as styles from './postCard.module.css';

const PostCard = ({ frontmatter, fields, excerpt }) => {
  const title = frontmatter.title || fields.slug;

  return (
    <li key={fields.slug} className={styles.card}>
      <article className="post-list-item" itemScope itemType="http://schema.org/Article">
        <header>
          <h2>
            <Link to={fields.slug} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          </h2>
          <small>{frontmatter.date}</small>
        </header>
        <section>
          <p
            dangerouslySetInnerHTML={{
              __html: frontmatter.description || excerpt,
            }}
            itemProp="description"
          />
        </section>
      </article>
    </li>
  );
};

export default PostCard;
