import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import Seo from '../components/seo';

const PrivacyPage = () => (
  <PageWrapper>
    <Seo title="Privacy" />
    <h1>Privacy & Terms</h1>
    <p>
      This is my personal blog; I have no intention of monetising it through the sale of your data
      or information. I have added zero tracking software, analytics software, or data-sharing API's
      to this site.
    </p>

    <h2>Cookies</h2>
    <p>The keyframe uses no cookies, period. Enjoy not having your privacy violated for once.</p>

    <h2>Log Files</h2>
    <p>
      The keyframe uses no log files to store information. This includes your IP address, internet
      service provider, location, usage analytics, etc. etc. I do not track any of that data.
    </p>

    <h2>Data Retention</h2>
    <p>
      If you decide to fill out the subscription form, your email is stored in a secure database. I
      will only use that data to send you an email notification whenever a new post is published,
      that data is never sold to or shared with any third-party by me. You can unsubscribe at any
      time, and upon doing so your email will be removed from the database.
    </p>

    <h2>Copyright Information</h2>
    <p>
      Everything written on this site is, unless otherwise indicated, property of me, David Mooney.
    </p>
    <p>
      Feel free to copy and/or quote content and replicate it online or in print, but please give me
      credit and link back to this site. All rights reserved © David Mooney{' '}
      {new Date().getFullYear()}
    </p>

    <h2>Contact</h2>
    <p>
      If you have any questions, comments, or concerns, please email me at{' '}
      <a href="mailto:thekeyframe@gmail.com">thekeyframe@gmail.com</a>
    </p>
  </PageWrapper>
);

export default PrivacyPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
