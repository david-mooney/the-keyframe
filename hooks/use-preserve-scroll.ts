import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export const usePreserveScroll = () => {
  const router = useRouter();
  const scrollPositions = useRef<{ [url: string]: number }>({});

  useEffect(() => {
    const onRouteChangeStart = (targetUrl) => {
      const url = router.pathname;

      if (url === targetUrl) {
        window.scroll({ top: 0, behavior: 'auto' });
      }

      if (url === '/') {
        scrollPositions.current[url] = window.scrollY;
      }
    };

    const onRouteChangeComplete = (url: any) => {
      window.scroll({
        top: scrollPositions.current[url] || 0,
        behavior: 'auto',
      });
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
