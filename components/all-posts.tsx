import PostPreview from './post-preview';
import type Post from '../interfaces/post';
import styles from './all-posts.module.css';

type Props = {
  posts: Post[];
};

const AllPosts = ({ posts }: Props) => (
  <section className={styles.section}>
    <ol className={styles.list}>
      {posts.map((post, index) => (
        <li key={post.slug} className={styles['list-item']}>
          <PostPreview
            order={index}
            title={post.title}
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

export default AllPosts;
