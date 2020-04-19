import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import PageTransition from '@components/layout/pageTransition';
import Seo from '@components/seo';
import PostsGrid from '@components/postsGrid';
import Post from '@components/post';
import Page from '@components/page';

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Page title={data.site.siteMetadata.title}>
      <Seo title="Home" description="I is a good home page" />

      <PageTransition>
        <PostsGrid>
          {posts.map(({ node }, index) => (
            <Post key={node.fields.slug} index={index} {...node} />
          ))}
        </PostsGrid>
      </PageTransition>
    </Page>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default HomePage;

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
          }
        }
      }
    }
  }
`;
