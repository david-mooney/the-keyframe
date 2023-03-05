import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useMouse } from '@hooks/use-mouse';
import useEventListener from '@hooks/use-event-listener';
import { useDock } from './dock';
import styles from './dock-item.module.css';

// TODO - if reduce motion disable animation

export const DockItem = ({ children }) => {
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
    <motion.div
      className={styles.item}
      ref={ref}
      style={{
        width: spring,
        height: spring,
      }}
    >
      {children}
    </motion.div>
  );
};

export default DockItem;

// TODO: set the length of the circle's stroke
// const length = 2 * Math.PI * (val / 2);
// ref.current.style.setProperty('--length', `${length}`);
