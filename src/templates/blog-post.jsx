import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/blogLayout';
import Seo from '../components/seo';
import PostHero from '../components/postHero';
import PostArticle from '../components/postArticle';
import PostFooter from '../components/postFooter';
import ScrollToTop from '../components/scrollToTop';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || 'Title';

  return (
    <Layout location={location} title={siteTitle}>
      <ScrollToTop />

      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <PostHero data={post.frontmatter} />
      <PostArticle post={post} />
      <PostFooter data={data} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      timeToRead
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        color
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
