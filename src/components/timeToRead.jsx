// write a component that displays the time to read the article
import React from 'react';
import * as styles from './timeToRead.module.css';

export const TimeToRead = ({ readTime }) => (
  <div className={styles.container}>
    <span className={styles.text}>{readTime} minute read</span>
    <div className={styles.pipe} />
  </div>
);

export const TimeToReadBasic = ({ readTime }) => (
  <span className={styles.basic}>{readTime} minute read</span>
);

export default TimeToRead;
