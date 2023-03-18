import styles from '@components/layout/container.module.css';

type Props = {
  children?: React.ReactNode;
  wide?: boolean;
};

const Container = ({ children, wide }: Props) => {
  return (
    <div className={styles.container} data-wide={wide}>
      {children}
    </div>
  );
};

export default Container;
