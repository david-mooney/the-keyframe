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
  // split the shortcut around any + sign, and wrap the parts in a <kbd> element
  const parts = value.split('+').map((part) => (
    <kbd className={styles.kbd} key={part}>
      {part}
    </kbd>
  ));

  // join the parts with a + sign
  return <>{parts.reduce((prev, curr) => [prev, ' + ', curr])}</>;
};

const CommandShortcuts = () => (
  <ul className={styles.list}>
    {shortcuts.map(({ command, shortcut }) => (
      <li className={styles.item} key={command}>
        <span className={styles.command}>{command}</span>
        <Shortcut value={shortcut} />
      </li>
    ))}
  </ul>
);

export default CommandShortcuts;
