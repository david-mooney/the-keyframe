import { useLayoutEffect } from 'react';

const useLockScroll = () => {
  useLayoutEffect(() => {
    const initialState = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = initialState;
    };
  }, []);
};

export default useLockScroll;
