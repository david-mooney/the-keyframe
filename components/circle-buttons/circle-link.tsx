import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './circle-link.module.css';

export interface CircleLinkProps {
  label: string;
  href: string;
  size?: number;
  newTab?: boolean;
  scrollToTop?: boolean;
  children?: React.ReactNode;
}

export const CircleLink = ({
  label,
  href,
  children,
  scrollToTop = true,
  newTab = false,
}: CircleLinkProps) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link
      target={newTab ? '_blank' : '_self'}
      aria-label={label}
      href={href}
      className={styles.anchor}
      data-animate="true"
      scroll={isActive ? true : scrollToTop}
      rel={newTab ? 'noopener noreferrer' : null}
    >
      <span className={styles.icon} aria-hidden="true">
        {children}
      </span>

      <span className={styles.dot} data-active={isActive} />
    </Link>
  );
};

export default CircleLink;
