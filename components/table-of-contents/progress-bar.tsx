import styles from './progress-bar.module.css';

type Props = {
  progress: number;
};

const ProgressBar = ({ progress }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.track}>
        <div
          className={styles.progress}
          style={{ '--progress': progress } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
