import React from 'react';
import { graphql } from 'gatsby';

import BlogLayout from '../components/layout/blogLayout';
import Seo from '../components/seo';
import PostHero from '../components/postHero';
import PostArticle from '../components/postArticle';
import PostFooter from '../components/postFooter';
import ScrollToTop from '../components/scrollToTop';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || 'Title';

  const gradientColors = {
    '--gradientA': post.frontmatter.colorA,
    '--gradientB': post.frontmatter.colorB,
  };

  return (
    <BlogLayout location={location} title={siteTitle} css={gradientColors}>
      <ScrollToTop />

      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <PostHero data={post.frontmatter} readTime={post.timeToRead} />
      <PostArticle post={post} />
      <PostFooter data={data} />
    </BlogLayout>
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
        colorA
        colorB
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
