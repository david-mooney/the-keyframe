import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import Seo from '../components/seo';

export const Head = props => <Seo {...props} />;

const AboutPage = () => (
  <PageWrapper>
    <h1>About</h1>
    <p>
      This is the personal development blog of me, David Mooney. I don't like talking
      about myself, so this section is currently a work in progress.
    </p>

    <h2>Contact</h2>
    <p>
      You can reach me at{' '}
      <a href="mailto:thekeyframe@gmail.com">thekeyframe@gmail.com</a>
    </p>
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
