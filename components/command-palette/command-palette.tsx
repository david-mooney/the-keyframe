import Link from 'next/link';
import { createPortal } from 'react-dom';
import Dialog from './dialog';
import CommandShortcuts from './command-shortcuts';
import styles from './command-palette.module.css';

type Props = {
  close: () => void;
};

const CommandPalette = ({ close }: Props) => {
  return createPortal(
    <Dialog close={close}>
      <div className={styles.container}>
        <section className={styles.section}>
          <h3 className={styles.title}>Shortcuts</h3>
          <CommandShortcuts />
        </section>

        <section className={styles.section}>
          <h3 className={styles.title}>Navigation</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.item}>
              <Link href="/posts">All Posts</Link>
            </li>
            <li className={styles.item}>
              <Link href="/portfolio">Portfolio</Link>
            </li>
            <li className={styles.item}>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.title}>External Links</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="Github" className={styles.link}>
                Github
              </a>
            </li>
            <li className={styles.item}>
              <a href="Twitter" className={styles.link}>
                Twitter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Dialog>,
    document.body
  );
};

export default CommandPalette;
