import React, { useRef } from 'react';
import ProgressBar from '../components/progressBar';
import Bio from '../components/bio';

const PostArticle = ({ post }) => {
  const postRef = useRef(null);

  return (
    <article
      id="main"
      className="blog-post"
      itemScope
      itemType="http://schema.org/Article"
      ref={postRef}
    >
      <ProgressBar ref={postRef} />
      <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
        aria-labelledby="main-title"
      />
      <hr />
      <footer>
        <Bio />
      </footer>
    </article>
  );
};

export default PostArticle;
