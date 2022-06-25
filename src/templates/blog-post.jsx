import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import PostHero from '../components/postHero';
import PostArticle from '../components/postArticle';
import PostFooter from '../components/postFooter';

const BlogPostTemplate = ({ data, location }) => {
  const { html, excerpt, frontmatter, timeToRead } = data.markdownRemark;

  return (
    <>
      <Seo
        location={location}
        title={frontmatter.title}
        description={frontmatter.description || excerpt}
      />

      <PostHero data={frontmatter} readTime={timeToRead} />
      <PostArticle html={html} />
      <PostFooter data={data} />
    </>
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
        imageB {
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
        colorA
        colorB
      }
      timeToRead
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        colorA
        colorB
      }
      timeToRead
    }
  }
`;
