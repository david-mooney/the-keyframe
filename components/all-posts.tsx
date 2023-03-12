import Link from 'next/link';
import Post from '@interfaces/post';
import { useSearch } from '@hooks/use-search';
import styles from './container.module.css';

// TODO framer motion this, make the search results animate in/out, something cool

type Props = {
  posts: Post[];
};

const AllPosts = ({ posts }: Props) => {
  let postsToDisplay = posts;
  const { results, query } = useSearch();

  if (query.length && results?.length) {
    postsToDisplay = results.map((result) => result.item);
  }

  if (results && !results?.length) {
    return <p>No posts found.</p>;
  }

  return (
    <div className={styles.container}>
      {postsToDisplay.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link href={`/posts/${post.slug}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;
