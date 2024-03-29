import Link from 'next/link';
import { motion } from 'framer-motion';
import CoverImage from './cover-image';
import styles from './post-preview.module.css';
import type Post from '../interfaces/post';

const PostPreview = ({
  id,
  title,
  coverImage,
  created,
  slug,
  readTime,
  order,
}: Post) => (
  <article className={styles.article} data-animate="true">
    <span className={styles.order}>0{order + 1}</span>
    <CoverImage priority={order === 0} title={title} src={coverImage} id={id} />

    <header className={styles.header}>
      <div className={styles.meta}>
        <span>{created}</span>
      </div>
      <Link className={styles.link} as={`/${slug}`} href="/[slug]">
        <motion.h2 className={styles.title}>{title}</motion.h2>
        <button className={styles.button}>Read More</button>
      </Link>
      <div className={styles.footer}>
        <span>{readTime}</span>
      </div>
    </header>
  </article>
);

export default PostPreview;
