import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Slider = styled(motion.div)`
  position: absolute;
  width: 213.3125px;
  background: linear-gradient(0deg, #f9748f, #fe9a8b);
`;

const LayoutWrapper = ({ element, props, ...rest }) => {
  const { path } = props;
  const isHome = path === '/';

  const left = [-140, 244.6875, 244.6875];
  const top = [-50, -50, 100];
  const height = [window.innerHeight + 100, window.innerHeight + 100, 500];
  const borderRadius = [0, 0, 5];

  const variants = {
    home: {
      left,
      top,
      height,
      borderRadius,
      position: 'absolute',
    },
    post: {
      left: [...left].reverse(),
      top: [...top].reverse(),
      height: [...height].reverse(),
      borderRadius: [...borderRadius].reverse(),
      transitionEnd: {
        position: 'fixed',
      },
    },
  };

  return (
    <Wrapper {...props}>
      {element}

      <Slider
        variants={variants}
        animate={isHome ? 'home' : 'post'}
        initial={isHome ? 'home' : 'post'}
        transition={{ ease: 'circOut' }}
      />
    </Wrapper>
  );
};

LayoutWrapper.propTypes = {
  props: PropTypes.object,
  path: PropTypes.string,
  element: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LayoutWrapper;
