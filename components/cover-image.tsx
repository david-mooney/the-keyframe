import Image from 'next/image';
import styles from './cover-image.module.css';

type Props = {
  title: string;
  src: string;
  priority?: boolean;
};

const CoverImage = ({ title, src, priority }: Props) => (
  <div className={styles.square}>
    <Image
      priority={priority}
      className={styles.image}
      src={src}
      alt={`Cover Image for ${title}`}
      width={250}
      height={250}
    />
  </div>
);

export default CoverImage;
