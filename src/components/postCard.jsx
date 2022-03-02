import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import * as styles from './postCard.module.css';

const PostCard = ({ frontmatter, fields, timeToRead }) => {
  const { title, date, color, image } = frontmatter;
  const item = {
    hidden: { x: 200, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { type: 'spring', damping: 20, stiffness: 130 } },
  };

  return (
    <motion.li key={fields.slug} className={styles.list} variants={item}>
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
    </motion.li>
  );
};

export default PostCard;
