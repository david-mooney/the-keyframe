import React, { useEffect, useState } from 'react';
import { BsArrowBarUp } from '@react-icons/all-files/bs/BsArrowBarUp';
import throttle from 'lodash/throttle';
import CircleButton from './circleButton';
import * as styles from './scrollToTop.module.css';

const ScrollToTop = () => {
  const height = '50%';
  const width = '50%';
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    document.body.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const isVisible = () => window.pageYOffset > window.innerHeight / 2;
    const onScroll = throttle(event => setVisible(isVisible()), 24);

    setVisible(isVisible());
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll, { passive: true });
  }, []);

  return (
    <div className={`${styles.container} ${!visible && styles.hidden}`}>
      <CircleButton>
        <button
          type="button"
          className={styles.button}
          onClick={handleClick}
          aria-label="Scroll to top"
        >
          <div className={styles.icon}>
            <BsArrowBarUp style={{ height, width }} />
          </div>
        </button>
      </CircleButton>
    </div>
  );
};

export default ScrollToTop;
