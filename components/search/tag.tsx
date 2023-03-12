import style from './tag.module.css';

type Props = {
  value: string;
  checked: boolean;
  callback: (value: string) => void;
};

const TagFilter = ({ value, checked, callback }: Props) => {
  return (
    <label
      className={style.tag}
      htmlFor={value}
      data-checked={checked}
      data-animate="true"
    >
      <input
        type="checkbox"
        className="sr-only"
        id={value}
        value={value}
        onChange={() => callback(value)}
      />
      <span>{value}</span>
    </label>
  );
};

export default TagFilter;
