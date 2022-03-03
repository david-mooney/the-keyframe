import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import * as styles from './postHero.module.css';

const PostHero = ({ data }) => {
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
        <p>{data.date}</p>
      </div>
      <div className={styles.frame}>
        {data.image?.childImageSharp && (
          <GatsbyImage
            className={styles.image}
            image={data.image.childImageSharp.gatsbyImageData}
            alt="hmm"
          /> // TODO: fix alt
        )}
      </div>
    </motion.header>
  );
};

export default PostHero;
