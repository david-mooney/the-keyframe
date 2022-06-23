import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import algoliaSearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import SearchInput from '../components/inputs/search.jsx';
import PageLayout from '../components/layout/pageLayout';
import Seo from '../components/seo';
import BlogPostsList from '../components/blogPostsList.jsx';

const BlogIndex = ({ data, location }) => {
  const searchClient = useMemo(
    () => algoliaSearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    []
  );

  const title = data.site.siteMetadata?.title || 'Title';
  const { nodes } = data.allMarkdownRemark;

  return (
    <PageLayout title={title}>
      <Seo title="All posts" location={location} />
      <InstantSearch searchClient={searchClient} indexName="Pages">
        <SearchInput placeholder="Search for posts" />
        <BlogPostsList posts={nodes} />
      </InstantSearch>
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
