import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './postCard.module.css';

const PostCard = ({ frontmatter, fields, timeToRead }) => {
  const { title, date, colorA, colorB, image } = frontmatter;
  const gradientColors = {
    '--gradientA': colorA,
    '--gradientB': colorB,
  };

  return (
    <Link to={fields.slug} className={styles.link} itemProp="url" style={gradientColors}>
      <article
        className={`animate-colors ${styles.card}`}
        itemScope
        itemType="http://schema.org/Article"
      >
        {image?.childImageSharp && (
          <div className={styles.imageWrapper}>
            <GatsbyImage
              className={styles.image}
              image={image.childImageSharp.gatsbyImageData}
              alt={`Image for article: ${title}`}
            />
          </div>
        )}

        <header>
          <small>{date}</small>
          <div>
            <h2 itemProp="headline" className={styles.underline}>
              {title || fields.slug}
            </h2>
          </div>
          <small>{timeToRead} minute read</small>
        </header>
      </article>
    </Link>
  );
};

export default PostCard;
