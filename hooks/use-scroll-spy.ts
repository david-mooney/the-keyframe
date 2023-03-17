import { useEffect, useState, useRef } from 'react';

const useScrollspy = (elements, options) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const rootMargin = `-${options?.offset || 0}px 0px 0px 0px`;
  const observer = useRef<IntersectionObserver | null>();

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      (entries) => {
        const indexOfElementIntersecting = entries.findIndex(
          (entry) => entry.intersectionRatio > 0
        );

        setCurrentIndex(indexOfElementIntersecting);
      },
      {
        root: options?.root || null,
        rootMargin,
      }
    );

    const { current: currentObserver } = observer;

    elements.forEach((element) =>
      element ? currentObserver.observe(element) : null
    );

    return () => currentObserver.disconnect();
  }, [elements, options, rootMargin]);

  return [currentIndex];
};

export default useScrollspy;
