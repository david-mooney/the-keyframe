import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './postHero.module.css';

const PostHero = ({ data, readTime }) => (
  <header className={styles.header}>
    <div className={styles.content}>
      <small>{data.date}</small>
      <h1 id="main-title" itemProp="headline">
        {data.title}
      </h1>
      <small>{readTime} minute read</small>
    </div>

    {data.image?.childImageSharp && (
      <div className={styles.imageWrapper}>
        <GatsbyImage
          className={styles.image}
          image={data.image.childImageSharp.gatsbyImageData}
          objectFit="contain"
          alt={`Image for article: ${data.image.title}`}
        />
      </div>
    )}
  </header>
);

export default PostHero;
