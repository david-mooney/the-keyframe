import React from 'react';
import Navigation from './navigation';
import Controls from './controls';
import * as styles from './pageLayout.module.css';

const PageLayout = ({ data, children }) => {
  const post = data?.markdownRemark;
  let css = {};

  if (post) {
    css = {
      '--gradientA': post.frontmatter.colorA,
      '--gradientB': post.frontmatter.colorB,
    };
  }

  return (
    <>
      <Navigation />
      <main style={css} className={styles.main}>
        {children}
      </main>
      <Controls />
    </>
  );
};

export default PageLayout;
