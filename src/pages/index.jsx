import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import BlogPostsList from '../components/blogPostsList.jsx';

const BlogIndex = ({ data, location }) => {
  const title = data.site.siteMetadata?.title || 'Title';
  const { nodes } = data.allMarkdownRemark;

  return (
    <Layout location={location} title={title}>
      <Seo title="All posts" />
      <BlogPostsList posts={nodes} />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        timeToRead
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          color
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
