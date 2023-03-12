import style from './tag.module.css';

type Props = {
  value: string;
  checked: boolean;
  disabled: boolean;
  callback: (value: string) => void;
};

const TagFilter = ({ value, checked, disabled, callback }: Props) => {
  return (
    <label
      className={style.tag}
      htmlFor={value}
      data-checked={checked}
      data-disabled={disabled}
      data-animate="true"
    >
      <input
        type="checkbox"
        className="sr-only"
        id={value}
        value={value}
        onChange={() => callback(value)}
        disabled={disabled}
        checked={checked}
      />
      <span>{value}</span>
    </label>
  );
};

export default TagFilter;
