import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import Seo from '../components/seo';

export const Head = props => <Seo {...props} />;

const AboutPage = () => (
  <PageWrapper>
    {/* <Seo title="About" /> */}
    <h1>About</h1>
    <p>This is the personal development blog of David Mooney.</p>
  </PageWrapper>
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
