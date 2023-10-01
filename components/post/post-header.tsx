import { motion } from 'framer-motion';
import CoverImage from '@components/cover-image';
import type Author from '@interfaces/author';
import styles from './post-header.module.css';

type Props = {
  title: string;
  coverImage: string;
  created: string;
  updated: string;
  author: Author;
  readTime: string;
  slug: string;
  tags?: string[];
};

const PostHeader = ({ title, coverImage, created, updated, slug }: Props) => (
  <div className={styles.container}>
    <div className={styles.column}>
      <CoverImage title={title} src={coverImage} id={`post-image-${slug}`} />
    </div>

    <div className={styles.column}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 200 }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 100,
        }}
      >
        {title}
      </motion.h1>

      <div className={styles.dates}>
        <div>Created: {created}</div>
        {updated && <div>Last Updated: {updated}</div>}
      </div>
    </div>
  </div>
);

export default PostHeader;
