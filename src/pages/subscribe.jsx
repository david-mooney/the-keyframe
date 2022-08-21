import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import SubscribeCard from '../components/cards/subscribeCard.jsx';
import Seo from '../components/seo';

export const Head = props => <Seo {...props} />;

const SubscribePage = () => (
  <PageWrapper>
    <h1>Stay up to date</h1>
    <br />
    <SubscribeCard showTitle={false} />
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
