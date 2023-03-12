import { useEffect } from 'react';

const useDebouncedEffect = (effect: Function, deps: any[], delay: number) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);

    return () => clearTimeout(handler);
  }, [...(deps || []), delay]);
};

export default useDebouncedEffect;
