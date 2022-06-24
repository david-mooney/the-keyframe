import React from 'react';
import { Link } from 'gatsby';
import * as styles from './circleButton.module.css';

const CircleButton = ({ label = '', visible = true, href = null, handleClick, children }) =>
  href ? (
    <Link
      to={href}
      itemProp="url"
      tabIndex={visible ? 0 : -1}
      className={`${styles.circle} ${visible ? '' : 'hidden'}`}
    >
      {children}
      <span className="sr-only">{label}</span>
    </Link>
  ) : (
    <button
      type="button"
      onClick={handleClick}
      tabIndex={visible ? 0 : -1}
      className={`${styles.circle} ${visible ? '' : 'hidden'}`}
    >
      {children}
      <span className="sr-only">{label}</span>
    </button>
  );

export default CircleButton;
