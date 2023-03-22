import Tooltip from '@components/tooltip';
import styles from './button.module.css';

export type ButtonProps = {
  id: string;
  text: string;
  children: React.ReactNode;
  onClick: () => void;
};

const Button = ({ children, id, text, onClick }: ButtonProps) => (
  <Tooltip id={id} content={text}>
    <button
      className={styles.button}
      onClick={onClick}
      aria-describedby={id}
      data-animate="true"
    >
      {children}
      <span className="sr-only">{text}</span>
    </button>
  </Tooltip>
);

export default Button;
