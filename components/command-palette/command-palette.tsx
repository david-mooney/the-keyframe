import { createPortal } from 'react-dom';
import Dialog from './dialog';
import styles from './command-palette.module.css';

type Props = {
  close: () => void;
};

const CommandPalette = ({ close }: Props) => {
  return createPortal(
    <Dialog close={close}>
      <div className={styles.container}>
        <button>test1</button>
        <button>test2</button>
      </div>
    </Dialog>,
    document.body
  );
};

export default CommandPalette;
