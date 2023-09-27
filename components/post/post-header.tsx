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
  order: string;
  tags?: string[];
};

const PostHeader = ({
  title,
  coverImage,
  created,
  updated,
  order,
  tags = [],
}: Props) => {
  const breadcrumbs = [LINKS.home, LINKS.posts];

  tags.forEach((tag) =>
    breadcrumbs.push({
      href: `/posts/?q=${tag}`,
      label: tag,
    })
  );

  return (
    <div className={styles.container}>
      <Breadcrumbs links={breadcrumbs} />
      <div className={styles.column}>
        <CoverImage title={title} src={coverImage} id={`post-image-${order}`} />
      </div>

      <div className={styles.column}>
        <motion.h2 layoutId={`post-title-${order}`} className={styles.title}>
          {title}
        </motion.h2>

        <div className={styles.dates}>
          <div>Created: {created}</div>
          {updated && <div>Last Updated: {updated}</div>}
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
