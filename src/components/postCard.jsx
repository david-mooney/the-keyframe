import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import TimeToRead from './timeToRead';
import * as styles from './postCard.module.css';

const PostCard = ({ frontmatter, fields, timeToRead }) => {
  const { title, date, colorA, colorB, image } = frontmatter;
  const gradientColors = {
    '--gradientA': colorA,
    '--gradientB': colorB
  };

  return (
    <Link to={fields.slug} className={styles.link} itemProp="url">
      <article
        className={styles.card}
        // style={{ boxShadow: `${colorA} 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px` }}
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <small>{date}</small>
          <h2 itemProp="headline">{title || fields.slug}</h2>
          <TimeToRead readTime={timeToRead} />
        </header>

        {image?.childImageSharp && (
          <GatsbyImage
            className={styles.imageWrapper}
            image={image.childImageSharp.gatsbyImageData}
            style={gradientColors}
            alt={`Image for article: ${title}`}
          />
        )}
      </article>
    </Link>
  );
};

export default PostCard;
