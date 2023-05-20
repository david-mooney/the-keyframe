import CoverImage from './cover-image';
import Link from 'next/link';
import styles from './post-preview.module.css';

type Props = {
  order: number;
  title: string;
  excerpt: string;
  coverImage: string;
  created: string;
  slug: string;
  readTime: string;
};

const PostPreview = ({
  title,
  excerpt,
  coverImage,
  created,
  slug,
  readTime,
  order,
}: Props) => (
  <Link className={styles.link} as={`/posts/${slug}`} href="/posts/[slug]">
    <article className={styles.article} data-animate="true">
      <CoverImage priority={order === 0} title={title} src={coverImage} />

      <header className={styles.header}>
        <div className={styles.meta}>
          <span>{created}</span>
        </div>

        <div className={styles.title}>
          <h3 className={styles.underline}>{title}</h3>
        </div>

        <p>{excerpt}</p>

        <div className={styles.footer}>
          <span>{readTime}</span>
        </div>
      </header>
    </article>
  </Link>
);

export default PostPreview;
