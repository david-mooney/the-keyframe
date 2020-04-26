import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import PageTransition from '@components/layout/pageTransition';
import Bio from '@components/bio';
import Seo from '@components/seo';

const Article = styled.article`
  width: 100%;
  max-width: 900px;
  margin: 30rem auto;
`;

const Nav = styled.article`
  padding: 2rem 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
`;

const BlogPostTemplate = ({ data, pageContext }) => {
  const { site, markdownRemark: post } = data;
  const { previous, next } = pageContext;

  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <PageTransition>
        <Article>
          <header>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />

          <footer>
            <Bio />
          </footer>
        </Article>

        <Nav>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Nav>
      </PageTransition>
    </>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
      }
    }
  }
`;
