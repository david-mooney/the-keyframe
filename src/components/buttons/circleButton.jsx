import React from 'react';
import * as styles from './circleButton.module.css';

const CircleButton = ({ label = '', visible = true, handleClick, children }) => (
  <button
    type="button"
    aria-label={label}
    onClick={handleClick}
    tabIndex={visible ? 0 : -1}
    className={`${styles.circle} ${visible ? '' : 'hidden'}`}
  >
    {children}
  </button>
);

export default CircleButton;
