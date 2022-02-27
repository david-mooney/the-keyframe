// TODO: chapters

import React, { useRef, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import * as styles from './progressBar.module.css';

const ProgressBar = React.forwardRef((_, ref) => {
  const [progress, setProgress] = useState(0);
  const track = useRef(null);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const { offsetTop, offsetHeight } = ref.current;
      const articleTop = document.documentElement.scrollTop - offsetTop;
      const scrollPercent = Math.floor((articleTop / (offsetHeight - window.innerHeight)) * 100);

      setProgress(scrollPercent);
    }, 10);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return (
    <aside className={`${styles.aside} ${progress > 0 && progress < 100 && styles.visible}`}>
      <div className={styles.progressTrack} ref={track}>
        <div className={styles.progressBar} style={{ '--progress': progress / 100 }} />
      </div>
    </aside>
  );
});

export default ProgressBar;
