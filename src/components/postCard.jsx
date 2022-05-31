import React from 'react';
import { Link } from 'gatsby';
import TimeToRead from './timeToRead';
import * as styles from './postCard.module.css';

const PostCard = ({ frontmatter, fields, timeToRead }) => {
  const { title, date, colorA, colorB } = frontmatter;
  const gradientColors = {
    '--gradientA': colorA,
    '--gradientB': colorB,
  };

  return (
    <Link to={fields.slug} className={styles.link} itemProp="url" style={gradientColors}>
      {/* <small className={styles.date}>{date}</small> */}

      <article className={styles.card} itemScope itemType="http://schema.org/Article">
        <header>
          <div>
            <h2 itemProp="headline" className={styles.underline}>
              {title || fields.slug}
            </h2>
          </div>
          <TimeToRead readTime={timeToRead} />
        </header>
      </article>
    </Link>
  );
};

export default PostCard;
