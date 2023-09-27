import { motion } from 'framer-motion';
import styles from './cover-image.module.css';

type Props = {
  title?: string;
  id?: string;
  src?: string;
  priority?: boolean;
};

const CoverImage = ({ id }: Props) => (
  <motion.div className={styles.frame} layoutId={id}>
    <div className={styles.image} data-animate="true"></div>
  </motion.div>
);

export default CoverImage;
