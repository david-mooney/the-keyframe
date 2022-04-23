import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { TimeToReadBasic } from './timeToRead';
import * as styles from './postCard.module.css';

const PostCard = ({ frontmatter, fields, timeToRead }) => {
  const { title, date, color, image } = frontmatter;

  return (
    <Link to={fields.slug} className={styles.link} itemProp="url">
      <article
        className={styles.card}
        style={{ backgroundColor: color }}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <small>{date}</small>
          <h2 itemProp="headline">{title || fields.slug}</h2>
          <TimeToReadBasic readTime={timeToRead} />
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
  );
};

export default PostCard;
