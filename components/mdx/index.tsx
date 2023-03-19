import dynamic from 'next/dynamic';

const Code = dynamic(() => import('./code'), { ssr: false });

const components = {
  pre: Code,
};

export default components;
