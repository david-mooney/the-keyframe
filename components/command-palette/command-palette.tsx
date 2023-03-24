import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Dialog from './dialog';
import Shortcuts from './shortcuts';
import Links from './links';
import ExternalLinks from './external-links';
import styles from './command-palette.module.css';

type Props = {
  close: () => void;
};

const CommandPalette = ({ close }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return createPortal(
    <Dialog close={close}>
      <div className={styles.container}>
        <input
          ref={ref}
          type="search"
          className={styles.search}
          placeholder="Search for posts"
        />

        <section className={styles.section}>
          <h3 className={styles.title}>Shortcuts</h3>
          <Shortcuts />
        </section>

        <section className={styles.section}>
          <h3 className={styles.title}>Navigation</h3>
          <Links />
        </section>

        <section className={styles.section}>
          <h3 className={styles.title}>External Links</h3>
          <ExternalLinks />
        </section>
      </div>
    </Dialog>,
    document.body
  );
};

export default CommandPalette;
