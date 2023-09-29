import Link from 'next/link';
import { motion } from 'framer-motion';
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
    <span>0{order + 1}</span>

    <CoverImage
      priority={order === 0}
      title={title}
      src={coverImage}
      id={`post-image-${slug}`}
    />

    <header className={styles.header}>
      <div className={styles.meta}>
        <span>{created}</span>
      </div>
      <Link className={styles.link} as={`/posts/${slug}`} href="/posts/[slug]">
        {/* TODO - header component */}
        <motion.h2 className={styles.title} layoutId={`post-title-${slug}`}>
          {title}
        </motion.h2>
        <button className={styles.button}>Read More</button>
      </Link>
      <div className={styles.footer}>
        <span>{readTime}</span>
      </div>
    </header>
  </article>
);

export default PostPreview;
