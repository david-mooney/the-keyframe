import { useScroll } from 'framer-motion';
import React from 'react';

const useProgress = ({ target }) => {
  const [progress, setProgress] = React.useState(0);
  const { scrollYProgress } = useScroll({
    target,
    offset: ['start start', 'end end'],
  });

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
