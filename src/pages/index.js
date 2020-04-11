import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Page from '@components/page';
import Seo from '@components/seo';
import PostsGrid from '@components/postsGrid';
import Post from '@components/post';

const App = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Page location={location} title={siteTitle}>
      <Seo title="Home" description="I is a good home page" />
      <PostsGrid>
        {posts.map(({ node }, index) => (
          <Post key={node.fields.slug} index={index} {...node} />
        ))}
      </PostsGrid>
    </Page>
  );
};

App.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default App;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            title
            description
            gradient
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
