import React from 'react';
import { Link } from 'gatsby';
import AnimatedCircle from './animatedCircle.jsx';
import * as styles from './circleButton.module.css';

export const CircleLink = ({
  label = '',
  size = 44,
  visible = true,
  href,
  children,
}) => (
  <Link
    to={href}
    itemProp="url"
    tabIndex={visible ? 0 : -1}
    className={styles.button}
    data-visible={visible}
    style={{ '--size': `${size}px` }}
  >
    <AnimatedCircle size={size} />
    {children}
    <span className="srOnly">{label}</span>
  </Link>
);

export const CircleButton = ({
  label = '',
  size = 44,
  visible = true,
  handleClick,
  children,
}) => (
  <button
    type="button"
    className={styles.button}
    onClick={handleClick}
    tabIndex={visible ? 0 : -1}
    data-visible={`${visible}`}
    style={{ '--size': `${size}px` }}
  >
    <AnimatedCircle size={size} />
    {children}
    <span className="srOnly">{label}</span>
  </button>
);

export default CircleButton;
