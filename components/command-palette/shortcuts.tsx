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

const Shortcut = ({ command, value }) => {
  const parts = value.split('+').map((part) => (
    <kbd className={styles.kbd} key={part} data-animate="true">
      {part}
    </kbd>
  ));

  return (
    <span
      className={styles.shortcut}
      tabIndex={0}
      aria-label={`The shortcut to ${command} is ${value}`}
    >
      {parts.reduce((prev, curr) => [prev, ' + ', curr])}
    </span>
  );
};

const Shortcuts = () => (
  <ul className={styles.list} title="Keyboard Shortcuts">
    {shortcuts.map(({ command, shortcut }) => (
      <li className={styles.item} key={command}>
        <span className={styles.command}>{command}</span>
        <Shortcut command={command} value={shortcut} />
      </li>
    ))}
  </ul>
);

export default Shortcuts;
