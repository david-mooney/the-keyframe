import React from 'react';
import Link from 'next/link';
import Tooltip from '@/components/tooltip';
import { useRouter } from 'next/router';
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
}: CircleLinkProps) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link
      target={newTab ? '_blank' : '_self'}
      aria-label={label}
      href={href}
      className={`${styles.anchor} tooltip-anchor`}
    >
      <Tooltip>{label}</Tooltip>
      <span className={styles.icon} aria-hidden="true">
        {children}
      </span>

      <span className={styles.dot} data-active={isActive} />
    </Link>
  );
};

export default CircleLink;
