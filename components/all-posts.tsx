import Link from 'next/link';
import Post from '@interfaces/post';
import { useSearch } from '@hooks/use-search';
import styles from './all-posts.module.css';

// TODO framer motion this, make the search results animate in/out, something cool

type Props = {
  posts: Post[];
};

const AllPosts = ({ posts }: Props) => {
  const { results } = useSearch();

  if (results && !results.length) {
    return <p>No posts found.</p>;
  }

  return (
    <div className={styles.container}>
      {(results || posts).map((post) => (
        <div key={post.slug} className={styles.post}>
          <div className={styles.timeline}>
            <span>{post.created}</span>
          </div>
          <h2>{post.title}</h2>
          <Link href={`/${post.slug}`}>Read More</Link>

          <div>{post?.tags.map((tag) => <span key={tag}>{tag} </span>)}</div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
