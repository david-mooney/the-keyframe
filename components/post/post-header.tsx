import Breadcrumbs from '@components/breadcrumbs';
import { motion } from 'framer-motion';
import CoverImage from '@components/cover-image';
import { LINKS } from '@lib/constants';
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
    <Breadcrumbs links={[LINKS.home]} />
    <div className={styles.column}>
      <CoverImage title={title} src={coverImage} id={`post-image-${slug}`} />
    </div>

    <div className={styles.column}>
      <motion.h1 layoutId={`post-title-${slug}`} className={styles.title}>
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
