import React from 'react';
import { Link } from 'gatsby';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import CircleButton from './circleButton';

/* TODO - circleLink component */
const Back = () => (
  <Link to="/">
    <CircleButton label="Home">
      <FaHome />
    </CircleButton>
  </Link>
);

export default Back;
