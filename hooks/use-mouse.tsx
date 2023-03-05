import React, { createContext, useContext, useMemo } from 'react';
import { MotionValue, useMotionValue, useVelocity } from 'framer-motion';
import useEventListener from './use-event-listener';

const useMousePosition = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEventListener('mousemove', (event) => {
    x.set(event.clientX);
    y.set(event.clientY);
  });

  return useMemo(() => ({ x, y }), [x, y]);
};

type Mouse = {
  position: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  velocity: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
};

const MouseContext = createContext<Mouse | null>(null);

export const MouseProvider = ({ children }) => {
  const { x, y } = useMousePosition();
  const velocityX = useVelocity(x);
  const velocityY = useVelocity(y);

  const mouse = useMemo(
    () => ({
      position: {
        x,
        y,
      },
      velocity: {
        x: velocityX,
        y: velocityY,
      },
    }),
    [x, y, velocityX, velocityY]
  );

  return (
    <MouseContext.Provider value={mouse}>{children}</MouseContext.Provider>
  );
};

export const useMouse = () => {
  return useContext(MouseContext);
};
