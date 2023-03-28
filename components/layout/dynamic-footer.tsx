import styles from './dynamic-footer.module.css';

const dynamicFooter = () => {
  return (
    <div id="dynamic-footer" className={styles.footer}>
      <div className={styles.blocks}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
    </div>
  );
};

export default dynamicFooter;
