import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export const usePreserveScroll = () => {
  const router = useRouter();

  const scrollPositions = useRef<{ [url: string]: number }>({});
  const isBack = useRef(false);

  useEffect(() => {
    router.beforePopState(() => {
      isBack.current = true;
      return true;
    });

    const onRouteChangeStart = () => {
      const url = router.pathname;
      const horiz = document.getElementById('horiz');

      if (horiz) {
        scrollPositions.current[url] = horiz.scrollLeft;
      }
    };

    const onRouteChangeComplete = (url: any) => {
      if (isBack.current && scrollPositions.current[url]) {
        const horiz = document.getElementById('horiz');

        if (horiz) {
          horiz.scrollLeft = scrollPositions.current[url];
        }
      }

      isBack.current = false;
    };

    router.events.on('routeChangeStart', onRouteChangeStart);
    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', onRouteChangeStart);
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router]);
};

export default usePreserveScroll;
