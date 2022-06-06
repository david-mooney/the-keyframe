import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import TimeToRead from './timeToRead';
import * as styles from './postHero.module.css';

const PostHero = ({ data, readTime }) => (
  <header className={styles.header}>
    <div className={styles.content}>
      <small>{data.date}</small>
      <h1 id="main-title" itemProp="headline">
        {data.title}
      </h1>
      <TimeToRead readTime={readTime} />
    </div>

    <div className={styles.frame}>
      <div className={styles.imageWrapper}>
        {data.image?.childImageSharp && (
          <GatsbyImage
            className={styles.image}
            image={data.image.childImageSharp.gatsbyImageData}
            alt={`Image for article: "${data.title}"`}
          />
        )}
      </div>
    </div>
  </header>
);

export default PostHero;
