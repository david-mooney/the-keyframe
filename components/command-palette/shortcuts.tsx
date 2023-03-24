import styles from './command-palette.module.css';

const shortcuts = [
  {
    command: 'Change Theme',
    shortcut: 'Ctrl + t',
  },
  {
    command: 'Open/Close Command Palette',
    shortcut: 'Ctrl + k',
  },
  {
    command: 'Fireworks',
    shortcut: 'Ctrl + a',
  },
];

const Shortcut = ({ value }) => {
  const parts = value.split('+').map((part) => (
    <kbd className={styles.kbd} key={part}>
      {part}
    </kbd>
  ));

  return <>{parts.reduce((prev, curr) => [prev, ' + ', curr])}</>;
};

const Shortcuts = () => (
  <ul className={styles.list}>
    {shortcuts.map(({ command, shortcut }) => (
      <li className={styles.item} key={command}>
        <span className={styles.command}>{command}</span>
        <Shortcut value={shortcut} />
      </li>
    ))}
  </ul>
);

export default Shortcuts;
