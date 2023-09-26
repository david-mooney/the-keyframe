import Link from 'next/link';
import CoverImage from './cover-image';
import styles from './post-preview.module.css';

type Props = {
  order: number;
  title: string;
  coverImage: string;
  created: string;
  slug: string;
  readTime: string;
};

const PostPreview = ({
  title,
  coverImage,
  created,
  slug,
  readTime,
  order,
}: Props) => (
  <article className={styles.article} data-animate="true">
    <CoverImage priority={order === 0} title={title} src={coverImage} />

    <header className={styles.header}>
      <div className={styles.meta}>
        <span>{created}</span>
      </div>

      <Link className={styles.link} as={`/posts/${slug}`} href="/posts/[slug]">
        <div className={styles.title}>
          {/* TODO - header component */}
          <h2 className={styles.underline}>{title}</h2>
        </div>
        <button className={styles.button}>Read More</button>
      </Link>
      <div className={styles.footer}>
        <span>{readTime}</span>
      </div>
    </header>
  </article>
);

export default PostPreview;
