import React, { useEffect, useState } from 'react';
import { BsArrowLeft } from '@react-icons/all-files/bs/BsArrowLeft';
import CircleButton from './circleButton';
import * as styles from './backButton.module.css';

const Back = () => {
  const height = '50%';
  const width = '50%';
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    window?.history?.back();
  };

  useEffect(() => {
    setVisible(window?.location?.pathname !== '/' || false);
  }, []);

  return (
    <div className={`${styles.container} ${!visible && styles.hidden}`}>
      <CircleButton>
        <button
          type="button"
          className={styles.button}
          onClick={handleClick}
          aria-label="Scroll to top"
        >
          <div className={styles.icon}>
            <BsArrowLeft style={{ height, width }} />
          </div>
        </button>
      </CircleButton>
    </div>
  );
};

export default Back;
