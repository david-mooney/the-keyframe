import Date from './date-formatter';
import CoverImage from './cover-image';
import Link from 'next/link';
import styles from './post-preview.module.css';

type Props = {
  order: number;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  slug: string;
  readTime: string;
  tags?: string[];
};

const PostPreview = ({
  title,
  excerpt,
  coverImage,
  date,
  slug,
  readTime,
  order,
  tags,
}: Props) => {
  return (
    <Link className={styles.link} as={`/posts/${slug}`} href="/posts/[slug]">
      <article className={styles.article} data-animate="true">
        <CoverImage priority={order === 0} title={title} src={coverImage} />

        <header className={styles.header}>
          <div className={styles.meta}>
            <Date dateString={date} />
            <span>{readTime}</span>
          </div>

          <div className={styles.title}>
            <h2 className={styles.underline}>{title}</h2>
          </div>

          <p>{excerpt}</p>

          <div className={styles.tags}>
            {tags?.map((tag) => (
              <div key={tag} className={styles.tag}>
                {tag}
              </div>
            ))}
          </div>
        </header>
      </article>
    </Link>
  );
};

export default PostPreview;
