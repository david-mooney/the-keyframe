import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
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
      <hr data-animate="true" />

      <p>
        Written by{' '}
        <Link to="/about" className="underline" data-animate="true" itemProp="url">
          {author.name}
        </Link>
      </p>
    </div>
  );
};

export default Bio;
