import { useEffect, useRef } from 'react';

const useDebouncedEffect = (effect: Function, deps: any[], delay: number) => {
  const firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return effect();
    }

    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
  }, [...(deps || []), delay]);
};

export default useDebouncedEffect;
