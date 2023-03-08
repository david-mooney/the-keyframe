import styles from './cover-image.module.css';

type Props = {
  title?: string;
  src?: string;
  priority?: boolean;
};

const CoverImage = ({}: Props) => (
  <div className={styles.frame}>
    <div className={styles.image}></div>
  </div>
);

export default CoverImage;
