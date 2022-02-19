import React, { useEffect, useState } from 'react';
import { BsArrowBarUp } from '@react-icons/all-files/bs/BsArrowBarUp';
import * as styles from './scrollToTop.module.css';

function throttle(callback, limit) {
  var wait = false;
  return function (...args) {
    if (!wait) {
      callback(...args);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    document.body.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const onScroll = throttle(event => {
      const { scrollTop } = event.target.documentElement;
      const isVisible = scrollTop > window.innerHeight / 2;

      setVisible(isVisible);
    }, 30);

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      class={visible ? styles.button : styles.hidden}
      type="button"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <BsArrowBarUp class={styles.icon} />
    </button>
  );
};

export default ScrollToTop;
