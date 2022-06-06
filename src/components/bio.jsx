import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as styles from './bio.module.css';

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;

  if (!author?.name) return;

  return (
    <div className={styles.bio}>
      <hr />
      <p>
        Written by <strong>{author.name}</strong>
      </p>
      <hr />
    </div>
  );
};

export default Bio;
