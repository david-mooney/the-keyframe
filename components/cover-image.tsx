import { motion } from 'framer-motion';
import styles from './cover-image.module.css';

type Props = {
  title?: string;
  id?: string;
  src?: string;
  priority?: boolean;
};

const CoverImage = ({ id }: Props) => (
  <motion.div
    id={id}
    className={styles.frame}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      type: 'spring',
      damping: 20,
      stiffness: 100,
    }}
  >
    <div className={styles.image} data-animate="true"></div>
  </motion.div>
);

export default CoverImage;
