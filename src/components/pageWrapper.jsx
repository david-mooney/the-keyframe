import React from 'react';
import * as styles from './pageWrapper.module.css';
const PageWrapper = ({ children }) => <div className={styles.wrapper}>{children}</div>;

export default PageWrapper;
