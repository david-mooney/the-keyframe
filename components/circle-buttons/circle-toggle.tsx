import React from 'react';
import Tooltip from '@/components/tooltip';
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
    className={`${styles.button} tooltip-anchor`}
    onClick={handleClick}
    data-animate="true"
  >
    <Tooltip>{label}</Tooltip>
    {children}
  </button>
);

export default CircleToggle;
