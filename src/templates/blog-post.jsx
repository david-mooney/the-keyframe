import React from 'react';
import { graphql } from 'gatsby';
import PostHero from '../components/postHero';
import PostArticle from '../components/postArticle';
import PostFooter from '../components/postFooter';

export const Head = ({ data }) => {
  const { author, markdownRemark } = data;
  const { excerpt, frontmatter } = markdownRemark;

  return (
    <>
      <title>{frontmatter.title}</title>
      <meta name="description" content={frontmatter.description || excerpt} />
      <meta property="og:title" content={frontmatter.title}></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:description"
        content={frontmatter.description || excerpt}
      ></meta>
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:creator" content={author}></meta>
      <meta name="twitter:title" content={frontmatter.title}></meta>
      <meta name="twitter:description" content={frontmatter.description}></meta>
    </>
  );
};

const BlogPostTemplate = ({ data }) => {
  const { html, frontmatter, timeToRead } = data.markdownRemark;

  return (
    <>
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
