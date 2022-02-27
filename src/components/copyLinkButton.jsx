import React from 'react';
import { BsLink45Deg } from '@react-icons/all-files/bs/BsLink45Deg';
import CircleButton from './circleButton';

import * as styles from './copyLinkButton.module.css';

const CopyLinkButton = () => {
  const height = '50%';
  const width = '50%';

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <CircleButton label="copyLinkButton">
      <button className={styles.button} onClick={handleClick}>
        <div className={styles.icon}>
          <BsLink45Deg style={{ height, width }} />
        </div>
      </button>
    </CircleButton>
  );
};

export default CopyLinkButton;
