import React, { useRef } from 'react';
import ProgressBar from '../components/progressBar';
import Bio from '../components/bio';

const PostArticle = ({ post }) => {
  const postRef = useRef(null);

  return (
    <article className="blog-post" itemScope itemType="http://schema.org/Article" ref={postRef}>
      <ProgressBar ref={postRef} />

      <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
      <hr />
      <footer>
        <Bio />
      </footer>
    </article>
  );
};

export default PostArticle;
