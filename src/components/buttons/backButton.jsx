import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from '@react-icons/all-files/bs/BsArrowLeft';
import CircleButton from '../buttons/circleButton';

const Back = () => {
  const label = 'Back';
  const [visible, setVisible] = useState(false);

  const handleClick = () => window?.history?.back();

  useEffect(() => {
    setVisible(window?.location?.pathname !== '/' || false);
  }, []);

  return (
    <CircleButton label={label} visible={visible} handleClick={handleClick}>
      <BsArrowLeft />
    </CircleButton>
  );
};

export default Back;
