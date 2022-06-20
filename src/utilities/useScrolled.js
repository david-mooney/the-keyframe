import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

const useScrolled = () => {
  const framerate = 24;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > window.innerHeight / 2);
    }, framerate);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);

  return isScrolled;
};

export default useScrolled;
