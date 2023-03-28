import styles from '@components/layout/container.module.css';

type Props = {
  title?: string;
  children?: React.ReactNode;
  wide?: boolean;
};

const Container = ({ title, children, wide }: Props) => {
  return (
    <section title={title} className={styles.container} data-wide={wide}>
      {children}
    </section>
  );
};

export default Container;
