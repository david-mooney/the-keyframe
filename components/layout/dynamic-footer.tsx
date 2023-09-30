import styles from './dynamic-footer.module.css';

const dynamicFooter = () => {
  return (
    <div id="dynamic-footer" className={styles.footer}>
      <div className={styles.blocks}>
        <div className={styles.block}>1</div>
        <div className={styles.block}>2</div>
        <div className={styles.block}>3</div>
        <div className={styles.block}>4</div>
      </div>
    </div>
  );
};

export default dynamicFooter;
