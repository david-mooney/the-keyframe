// TODO: scroll snap goes here instead

import React from 'react';
import { Link } from 'gatsby';

const PostFooter = ({ data }) => {
  const { previous, next } = data;

  return (
    <nav className="blog-post-nav">
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
    </nav>
  );
};

export default PostFooter;

/* .list::-webkit-scrollbar {
  height: 0.333rem;
  width: 15px;
}

.list::-webkit-scrollbar-thumb {
  background: rgb(63, 62, 62);
  border-radius: 1rem;
}

.list::-webkit-scrollbar-track {
  background: rgb(12, 12, 12);
}

.list:focus-within::-webkit-scrollbar-thumb,
.list:focus-within::-webkit-scrollbar-track,
.list:hover::-webkit-scrollbar-thumb,
.list:hover::-webkit-scrollbar-track {
} */
