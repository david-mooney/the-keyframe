import styles from './tooltip.module.css';

// TODO: aria role tooltip and point to the element with aria-describedby
// or use aria-label and hide this?

const Tooltip = ({ children }: { children: React.ReactNode }) => (
  <span className={styles.tooltip} aria-hidden="true">
    {children}
  </span>
);

export default Tooltip;
