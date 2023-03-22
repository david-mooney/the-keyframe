import styles from './tooltip.module.css';

// TODO: aria role tooltip and point to the element with aria-describedby
// or use aria-label and hide this?

type Props = {
  id: string;
  content: string;
  children: React.ReactNode;
};

const Tooltip = ({ id, content, children }: Props) => (
  <>
    {children}
    <span className={styles.tooltip} id={id} role="tooltip">
      {content}
    </span>
  </>
);

export default Tooltip;
