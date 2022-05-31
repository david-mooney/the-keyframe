import React from 'react';
import { graphql } from 'gatsby';

import PageLayout from '../components/layout/pageLayout';
import Seo from '../components/seo';
import SubscribeCard from '../components/subscribeCard';

const NewsletterPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <PageLayout location={location} title={siteTitle}>
      <Seo title="Newsletter" />

      <div className="page">
        <h1>Newsletter</h1>
        <SubscribeCard />
      </div>
    </PageLayout>
  );
};

export default NewsletterPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
