import React from 'react';
import { BsArrowBarUp } from '@react-icons/all-files/bs/BsArrowBarUp';
import useScrolled from '../../utilities/useScrolled';
import CircleButton from './circleButton';

const ScrollToTop = () => {
  const label = 'Scroll to top';
  const visible = useScrolled();

  const handleClick = () => {
    document.body.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <CircleButton label={label} visible={visible} handleClick={handleClick}>
      <BsArrowBarUp />
    </CircleButton>
  );
};

export default ScrollToTop;
