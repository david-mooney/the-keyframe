import React from 'react';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import CircleButton from './circleButton';

/* TODO - circleLink component */
const Back = () => (
  <CircleButton label="Home" href="/">
    <FaHome />
  </CircleButton>
);

export default Back;
