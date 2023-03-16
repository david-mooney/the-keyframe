import React, { useEffect, useRef, useState } from 'react';
import {
  m,
  useSpring,
  useTransform,
  LazyMotion,
  domAnimation,
} from 'framer-motion';
import { useMouse } from '@hooks/use-mouse';
import useEventListener from '@hooks/use-event-listener';
import { useDock } from './dock';
import styles from './dock-item.module.css';

export const DockItem = ({ children, animate }) => {
  const SIZE = 48;
  const SIZE_ENLARGED = 56;
  const ref = useRef<HTMLDivElement>();
  const mouse = useMouse();
  const dock = useDock();
  const [elCenterX, setElCenterX] = useState<number | null>(null);

  const dimension = useTransform(mouse.position.x, (mouseX) => {
    const distance = ((mouseX - elCenterX) / dock.width) * Math.PI;
    return SIZE + SIZE_ENLARGED * Math.cos(distance / 2) ** 10;
  });

  const spring = useSpring(SIZE, {
    damping: 10,
    stiffness: 150,
    mass: 0.01,
  });

  useEffect(() => {
    return dimension.on('change', (val) => {
      if (dock.hovered) {
        spring.set(Math.round(val));
      } else if (spring.get() !== SIZE) {
        spring.set(SIZE);
      }
    });
  }, [spring, dimension, dock.hovered]);

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    setElCenterX(rect.x + rect.width / 2);
  }, []);

  useEventListener('resize', () => {
    const rect = ref.current.getBoundingClientRect();
    setElCenterX(rect.x + rect.width / 2);
  });

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={styles.item}
        ref={ref}
        style={
          animate && {
            width: spring,
            height: spring,
          }
        }
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};

export default DockItem;
