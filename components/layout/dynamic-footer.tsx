// import { useRef } from 'react';
// import useTabTrap from '@hooks/use-tab-trap';
// import useLockScroll from '@hooks/use-lock-scroll';
import styles from './dynamic-footer.module.css';

const dynamicFooter = () => {
  // const ref = useRef(null);
  // useTabTrap(ref);
  // useLockScroll();

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
