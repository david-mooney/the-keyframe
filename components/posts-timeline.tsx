import Link from 'next/link';
import Post from '@interfaces/post';
import styles from './posts-timeline.module.css';

type Props = {
  posts: Post[];
};

const AllPosts = ({ posts }: Props) => (
  <div>
    {posts.map((post) => (
      <Link
        href={`/posts/${post.slug}`}
        key={post.slug}
        className={styles.container}
      >
        <div>{post.created}</div>
        <div className={styles.title}>
          <h2 className={styles.underline}>{post.title}</h2>
        </div>

        <span className={styles.underline}>Read More</span>
      </Link>
    ))}
  </div>
);

export default AllPosts;
