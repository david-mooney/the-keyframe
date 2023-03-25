import styles from './command-palette.module.css';

const Links = () => (
  <ul className={styles.list} title="External Links">
    <li className={styles.item}>
      <a
        href="https://github.com/david-mooney/the-keyframe"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </li>
  </ul>
);

export default Links;
