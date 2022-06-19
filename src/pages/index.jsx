import React from 'react';
import { graphql } from 'gatsby';
import PageLayout from '../components/layout/pageLayout';
import Seo from '../components/seo';
import BlogPostsList from '../components/blogPostsList.jsx';

const BlogIndex = ({ data, location }) => {
  const title = data.site.siteMetadata?.title || 'Title';
  const { nodes } = data.allMarkdownRemark;

  return (
    <PageLayout location={location} title={title}>
      <Seo title="All posts" />
      <BlogPostsList posts={nodes} />
    </PageLayout>
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
    }
  }
`;
