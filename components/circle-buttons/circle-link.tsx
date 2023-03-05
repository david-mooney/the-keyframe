import React from 'react';
import Link from 'next/link';
import AnimatedCircle from './animated-circle';
import styles from './circle-link.module.css';

export interface CircleLinkProps {
  label: string;
  href: string;
  size?: number;
  newTab?: boolean;
  children?: React.ReactNode;
}

export const CircleLink = ({
  label,
  href,
  children,
  newTab = false,
}: CircleLinkProps) => (
  <Link
    target={newTab ? '_blank' : '_self'}
    aria-label={label}
    href={href}
    className={styles.anchor}
  >
    {/* <AnimatedCircle /> */}
    <span className={styles.icon} aria-hidden="true">
      {children}
    </span>
  </Link>
);

export default CircleLink;
