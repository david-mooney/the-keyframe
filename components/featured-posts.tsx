import type Post from '@interfaces/post';
import PostPreview from '@components/post-preview';
import styles from '@components/featured-posts.module.css';

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  return (
    <section className={styles.section}>
      <ol className={styles.list}>
        {posts.map((post, index) => (
          <li key={post.slug}>
            <PostPreview
              order={index}
              title={post.title}
              excerpt={post.excerpt}
              coverImage={post.coverImage}
              date={post.date}
              slug={post.slug}
              readTime={post.readTime}
              tags={post.tags}
            />
          </li>
        ))}
      </ol>
    </section>
  );
};

export default FeaturedPosts;