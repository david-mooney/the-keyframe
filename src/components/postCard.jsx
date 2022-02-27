import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './postCard.module.css';

const PostCard = ({ frontmatter, fields, timeToRead }) => {
  const { title, date, color, image } = frontmatter;

  return (
    <li key={fields.slug} className={styles.list}>
      <Link to={fields.slug} itemProp="url">
        <article
          className={styles.card}
          style={{ backgroundColor: color }}
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <small>{date}</small>
            <h2 itemProp="headline">{title || fields.slug}</h2>
            <small className={styles.readTime}>{timeToRead} min read</small>
          </header>

          {image?.childImageSharp && (
            <GatsbyImage
              className={styles.imageWrapper}
              image={image.childImageSharp.gatsbyImageData}
              alt={`Image for article: ${title}`}
            />
          )}
        </article>
      </Link>
    </li>
  );
};

export default PostCard;
