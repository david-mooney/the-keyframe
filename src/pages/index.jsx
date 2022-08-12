import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import algoliaSearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-hooks-web';
import Seo from '../components/seo';
import SearchInput from '../components/inputs/search.jsx';
import BlogPostsList from '../components/blogPostsList.jsx';

let firstLoad = true;

const BlogIndex = ({ data, location }) => {
  const algoliaClient = useMemo(
    () => algoliaSearch(process.env.GATSBY_ALGOLIA_APP_ID, process.env.GATSBY_ALGOLIA_SEARCH_KEY),
    []
  );

  const searchClient = {
    search(requests) {
      const savedQuery = requests[0]?.params?.query;

      if (firstLoad === true && !savedQuery) {
        firstLoad = false;

        return Promise.resolve({
          results: [{ hits: data.allMarkdownRemark.nodes }],
        });
      }

      return algoliaClient.search(requests);
    },
  };

  return (
    <>
      <Seo title="All posts" location={location} />
      <InstantSearch searchClient={searchClient} routing={true} indexName="Pages">
        <SearchInput total={data.allMarkdownRemark.nodes.length} placeholder="Search for posts" />
        <BlogPostsList posts={data.allMarkdownRemark.nodes} />
      </InstantSearch>
    </>
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
