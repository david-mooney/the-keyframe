import React from 'react';
import styles from './circle-toggle.module.css';

export interface CircleToggleProps {
  label: string;
  size?: number;
  checked?: boolean;
  handleClick: () => void;
  children?: React.ReactNode;
}

export const CircleToggle = ({
  label,
  checked = false,
  handleClick,
  children,
}: CircleToggleProps) => (
  <button
    type="button"
    role="switch"
    aria-label={label}
    aria-checked={checked}
    className={styles.button}
    onClick={handleClick}
    data-animate="true"
  >
    {children}
  </button>
);

export default CircleToggle;
