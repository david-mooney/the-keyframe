import React from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../components/layout/pageLayout';
import Seo from '../components/seo';

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <PageLayout location={location} title={siteTitle}>
      <Seo title="About" />
      <h1>About</h1>
      <p>This is the about page</p>
    </PageLayout>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
