import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import SubscribeCard from '../components/cards/subscribeCard.jsx';
import Seo from '../components/seo';

export const Head = props => <Seo {...props} />;

const SubscribePage = () => (
  <PageWrapper>
    {/* <Seo title="Subscribe" /> */}
    <h1>Keep up to date</h1>
    <br />
    <SubscribeCard />
  </PageWrapper>
);

export default SubscribePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
