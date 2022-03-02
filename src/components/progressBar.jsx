// TODO: chapters

import React, { useRef, useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import clamp from 'lodash/clamp';
import * as styles from './progressBar.module.css';

const ProgressBar = React.forwardRef((_, ref) => {
  const track = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const passive = { passive: true };

    const handleScroll = throttle(() => {
      const { offsetTop, offsetHeight } = ref.current;
      const articleTop = document.documentElement.scrollTop - offsetTop;

      if (articleTop < 0) {
        setProgress(0);
        return;
      }

      const scrollPercent = Math.floor((articleTop / (offsetHeight - window.innerHeight)) * 100);
      setProgress(clamp(scrollPercent, 0, 100));
    }, 16);

    window.addEventListener('scroll', handleScroll, passive);
    return () => window.removeEventListener('scroll', handleScroll, passive);
  }, [ref]);

  console.log('redrawing progress bar');

  return (
    <aside className={`${styles.aside} ${progress > 0 && progress < 100 && styles.visible}`}>
      <div className={styles.progressTrack} ref={track}>
        <div className={styles.progressBar} style={{ '--progress': progress / 100 }} />
      </div>
    </aside>
  );
});

export default ProgressBar;
