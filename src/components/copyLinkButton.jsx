import React from 'react';
import { FiShare } from '@react-icons/all-files/fi/FiShare';
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
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
        aria-label="Copy a link to this page"
      >
        <div className={styles.icon}>
          <FiShare style={{ height, width }} />
        </div>
      </button>
    </CircleButton>
  );
};

export default CopyLinkButton;
