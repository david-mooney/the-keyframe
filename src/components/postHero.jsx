import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './postHero.module.css';

const PostHero = ({ data }) => {
  return (
    <header className={styles.header}>
      <div className={styles.content} style={{ backgroundColor: data.color }}>
        <h1 itemProp="headline">{data.title}</h1>
        <p>{data.date}</p>
      </div>
      <div className={styles.image}>
        {data.image?.childImageSharp && (
          <GatsbyImage image={data.image.childImageSharp.gatsbyImageData} alt="hmm" /> // TODO: fix alt
        )}
      </div>
    </header>
  );
};

export default PostHero;
