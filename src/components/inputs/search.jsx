import React, { useState } from 'react';
import { useSearchBox } from 'react-instantsearch-hooks-web';
import { FiSearch } from '@react-icons/all-files/fi/FiSearch';
import * as styles from './search.module.css';

const typingDelay = 250;

let timer;

const CustomSearchBox = ({ placeholder }) => {
  const { query, refine } = useSearchBox();
  const [value, setValue] = useState(query);

  const handleChange = event => {
    setValue(event.target.value);
    clearTimeout(timer);
    timer = setTimeout(() => refine(event.target.value), typingDelay);
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        className={`animate-colors ${styles.input}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />

      <div className={`animate-colors ${styles.icon}`}>
        <FiSearch />
      </div>
    </div>
  );
};

export default CustomSearchBox;
