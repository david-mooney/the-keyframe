import { motion } from 'framer-motion';
import styles from './cover-image.module.css';

type Props = {
  title?: string;
  id?: string;
  src?: string;
  priority?: boolean;
};

const CoverImage = ({ id }: Props) => {
  return (
    <motion.div
      id={id}
      className={styles.frame}
      animate={{
        scale: [0.3, 1.1, 1],
        opacity: [0, 1, 1],
      }}
      exit={{
        scale: [1, 1.1, 0.3],
        opacity: [1, 1, 0],
      }}
      transition={{
        damping: 20,
        stiffness: 100,
      }}
    >
      <div className={styles.image} data-animate="true"></div>
    </motion.div>
  );
};

export default CoverImage;
