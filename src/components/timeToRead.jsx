// write a component that displays the time to read the article
import React from 'react';
import * as styles from './timeToRead.module.css';

export const TimeToRead = ({ readTime }) => (
  <small className={styles.timeToRead}>{readTime} minute read</small>
);

export default TimeToRead;
