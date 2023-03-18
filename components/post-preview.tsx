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
}: Props) => {
  return (
    <Link className={styles.link} as={`/posts/${slug}`} href="/posts/[slug]">
      <article className={styles.article} data-animate="true">
        <CoverImage priority={order === 0} title={title} src={coverImage} />

        <header className={styles.header}>
          <div className={styles.meta}>
            <span>{created}</span>
            <span>{readTime}</span>
          </div>

          <div className={styles.title}>
            <h2 className={styles.underline}>{title}</h2>
          </div>

          <p>{excerpt}</p>
        </header>
      </article>
    </Link>
  );
};
export default PostPreview;
