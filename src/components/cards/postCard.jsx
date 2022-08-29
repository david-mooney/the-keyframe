import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './postCard.module.css';

const PostCard = ({ frontmatter, fields, timeToRead }) => {
  const { title, date, image, imageB } = frontmatter;

  return (
    <Link to={fields.slug} className={styles.link} itemProp="url">
      <article
        className={styles.card}
        data-animate="true"
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
            {imageB?.childImageSharp && (
              <GatsbyImage
                className={styles.image}
                image={imageB.childImageSharp.gatsbyImageData}
                alt={`Image for article: ${title}`}
              />
            )}
          </div>
        )}

        <header>
          <small>{date}</small>
          <div className={styles.title}>
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
