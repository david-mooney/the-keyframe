import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import TimeToRead from './timeToRead';
import * as styles from './postHero.module.css';

const PostHero = ({ data, readTime }) => {
  const enter = { opacity: 1 };
  const exit = { opacity: 0 };

  return (
    <motion.header
      className={styles.header}
      initial={exit}
      animate={enter}
      exit={exit}
      transition={{ type: 'tween' }}
      style={{ backgroundColor: data.color }}
    >
      <div className={styles.content}>
        <h1 id="main-title" itemProp="headline">
          {data.title}
        </h1>
        <span className={styles.date}>{data.date}</span>
        <TimeToRead readTime={readTime} />
      </div>
      <div className={styles.frame}>
        {data.image?.childImageSharp && (
          <GatsbyImage
            className={styles.image}
            image={data.image.childImageSharp.gatsbyImageData}
            alt={`Image for article: "${data.title}"`}
          />
        )}
      </div>
    </motion.header>
  );
};

export default PostHero;