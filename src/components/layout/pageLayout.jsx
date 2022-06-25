import React from 'react';
import Navigation from './navigation';
import Header from './header';
import Controls from './controls';
import * as styles from './pageLayout.module.css';

const PageLayout = ({ location, data, children }) => {
  const title = data?.site?.siteMetadata?.title || 'The Keyframe';
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
      <Header title={title} location={location} />
      <main style={css} className={styles.main}>
        {children}
      </main>
      <Controls />
    </>
  );
};

export default PageLayout;
