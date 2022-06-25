import React from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/seo';

const AboutPage = () => (
  <>
    <Seo title="About" />
    <h1>About</h1>
    <p>This is the about page</p>
  </>
);

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
