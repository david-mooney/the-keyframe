import PostPreview from '@components/post-preview';
import type Post from '@interfaces/post';
import styles from '@components/featured-posts.module.css';

type FeaturedPostsProps = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => (
  <section className={styles.section}>
    <ol className={styles.list}>
      {posts.map((post, index) => (
        <li key={post.id}>
          <PostPreview {...post} order={index} />
        </li>
      ))}
    </ol>
  </section>
);

export default FeaturedPosts;
