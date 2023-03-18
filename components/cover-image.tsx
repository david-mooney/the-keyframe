import styles from './cover-image.module.css';

type Props = {
  title?: string;
  src?: string;
  priority?: boolean;
};

// TODO - cleanup image stuff

const CoverImage = ({}: Props) => (
  <div className={styles.frame}>
    <div className={styles.image} data-animate="true"></div>
  </div>
);

export default CoverImage;
