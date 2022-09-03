import React from 'react';
import { graphql } from 'gatsby';
import PageWrapper from '../components/pageWrapper';
import Seo from '../components/seo';

export const Head = props => <Seo {...props} />;

const PrivacyPage = () => (
  <PageWrapper>
    <h1>Privacy & Terms</h1>
    <p>
      This is my personal blog; I have no intention of monetising it through the sale
      of your data or usage metrics. I have added zero tracking software, marketing
      software, or data-sharing API's to this site.
    </p>

    <p>
      You can see for yourself, this entire site is{' '}
      <a href="https://github.com/david-mooney/the-key-frame">
        open source on Github
      </a>
      .
    </p>

    <h2>Cookies</h2>
    <p>
      The Keyframe uses no cookies - enjoy the lack of cookie banners and 'we respect
      your privacy' platitudes.
    </p>

    <h2>Log Files</h2>
    <p>
      The Keyframe uses no log files to store information. Many websites use these to
      track data like your IP address, internet service provider, location, usage
      analytics, etc. The Keyframe does not track any of that.
    </p>

    <h2 id="data-retention">Data Retention</h2>
    <p>
      If you decide to fill out the subscription form, your email is stored with{' '}
      <a
        href="https://convertkit.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
      >
        ConvertKit
      </a>
      . I will only use that data to send you an email notification whenever a new
      post is published; I will never share it with any third party. You can
      unsubscribe at any time.
    </p>

    <h2>Copyright Information</h2>
    <p>
      Everything written on this site is, unless otherwise indicated, property of me,
      David Mooney.
    </p>
    <p>
      Feel free to copy and/or quote content and replicate it online or in print, but
      please give me credit and link back to this site. All rights reserved © David
      Mooney, {new Date().getFullYear()}
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
