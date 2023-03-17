import { useScroll } from 'framer-motion';
import React from 'react';

const useProgress = () => {
  const [progress, setProgress] = React.useState(0);
  const { scrollYProgress } = useScroll();

  React.useEffect(
    () =>
      scrollYProgress.on('change', (latest: number) => {
        setProgress(Number(latest.toFixed(2)));
      }),
    [scrollYProgress]
  );

  return progress;
};

export default useProgress;
