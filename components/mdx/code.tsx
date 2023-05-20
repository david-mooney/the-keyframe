import { Highlight, themes } from 'prism-react-renderer';
import styles from './code.module.css';

const Code = ({ children }) => {
  const classes = children.props.className || '';
  const code = children.props.children.trim();
  const language = classes.replace(/language-/, '');

  // theme={{ plain: {}, styles: [] }}

  return (
    <Highlight theme={themes.duotoneDark} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${styles.code}`} style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span>{i + 1}</span>
              <div>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
