import React, { useState, useEffect, useContext, useRef } from 'react';
import { MouseProvider } from '@hooks/use-mouse';
import { useMediaQuery } from '@hooks/use-media-query';
import DockItem from './dock-item';
import styles from './dock.module.css';

type DockProps = {
  hovered: boolean;
  width: number | undefined;
};

const DockContext = React.createContext<DockProps | null>(null);

export const useDock = () => {
  return useContext(DockContext);
};

const Dock = ({ children }) => {
  const ref = useRef<HTMLDivElement>();
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState<number | undefined>();
  const hasMouse = useMediaQuery('(pointer:fine)');
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    setWidth(ref.current.clientWidth);
  }, []);

  const disableAnimation = !hasMouse || reducedMotion;

  return (
    <DockContext.Provider value={{ hovered, width }}>
      <aside
        ref={ref}
        className={styles.container}
        onMouseOver={() =>
          disableAnimation ? setHovered(false) : setHovered(true)
        }
        onMouseOut={() => setHovered(false)}
        data-animate="true"
      >
        <MouseProvider>
          {children.map((item, index) => (
            <DockItem key={index}>{item}</DockItem>
          ))}
        </MouseProvider>
      </aside>
    </DockContext.Provider>
  );
};

export default Dock;
