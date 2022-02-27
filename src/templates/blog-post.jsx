import React, { useRef } from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Bio from '../components/bio';
import Layout from '../components/blogLayout';
import Seo from '../components/seo';
import ProgressBar from '../components/progressBar';
import ScrollToTop from '../components/scrollToTop';

function BlogPostTemplate({ data, location }) {
  const postRef = useRef(null);
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || 'Title';
  const { previous, next } = data;

  return (
    <Layout location={location} title={siteTitle}>
      <ScrollToTop />

      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <div>
        {post.frontmatter.image?.childImageSharp && (
          <GatsbyImage image={post.frontmatter.image.childImageSharp.gatsbyImageData} alt="hmm" />
        )}
      </div>

      <article className="blog-post" itemScope itemType="http://schema.org/Article" ref={postRef}>
        <ProgressBar ref={postRef} />
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>

        <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article>

      <nav className="blog-post-nav">
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
            height: '20rem',
            border: '1px solid var(--color-secondary)',
          }}
        >
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
      </nav>
    </Layout>
  );
}

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
