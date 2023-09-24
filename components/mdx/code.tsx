import styles from './code.module.css';

const Code = ({ children }) => {
  const classes = children.props.className || '';
  const code = children.props.children.trim();

  return (
    // TODO - add a proper code block
    <div className={styles.code}>
      <pre className={classes}>
        <code className={classes}>{code}</code>
      </pre>
    </div>
  );
};

export default Code;
