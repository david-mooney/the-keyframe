import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import SubscribeCard from '../components/subscribeCard';

const NewsletterPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Newsletter" />

      <div className="page">
        <h1>Newsletter</h1>
        <SubscribeCard />
      </div>
    </Layout>
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
