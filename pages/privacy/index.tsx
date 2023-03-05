import Head from 'next/head';
import Container from '../../components/container';
import Layout from '../../components/layout';
import { CMS_NAME } from '../../lib/constants';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>

      <Container>
        <h1>Privacy & Terms</h1>
        <p>
          This is my personal blog; I have no intention of monetising it through
          the sale of your data or usage metrics. I have added zero tracking
          software, marketing software, or data-sharing API&apos;s to this site.
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
          The Keyframe uses no cookies. No log files or analytics software
          either
        </p>

        <h2 id="data-retention">Data Retention</h2>
        <p>
          If you decide to fill out the subscription form, your email is stored
          with{' '}
          <a
            href="https://convertkit.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            ConvertKit
          </a>
          . I will only use that data to send you an email notification whenever
          a new post is published; I will never share it with any third party.
          You can unsubscribe at any time.
        </p>

        <h2>Copyright Information</h2>
        <p>
          Everything written on this site is, unless otherwise indicated,
          property of David Mooney.
        </p>
        <p>
          Feel free to copy and/or quote content and replicate it online or in
          print, but please give me credit and link back to this site. All
          rights reserved © David Mooney, {new Date().getFullYear()}
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions, comments, or concerns, please email me at{' '}
          <a href="mailto:thekeyframe@gmail.com">thekeyframe@gmail.com</a>
        </p>
      </Container>
    </Layout>
  );
}
