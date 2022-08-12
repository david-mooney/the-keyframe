import React, { useState, useEffect } from 'react';
import { useSearchBox, useHits } from 'react-instantsearch-hooks-web';
import { FiSearch } from '@react-icons/all-files/fi/FiSearch';
import * as styles from './search.module.css';

const typingDelay = 250;
let timer;

const CustomSearchBox = ({ total, placeholder }) => {
  const { hits } = useHits();
  const { query, refine } = useSearchBox();
  const [value, setValue] = useState(query);
  const [hitCount, setHitCount] = useState(hits.length === total ? 'all' : hits.length);

  const handleChange = event => {
    setValue(event.target.value);
    clearTimeout(timer);
    timer = setTimeout(() => refine(event.target.value), typingDelay);
  };

  useEffect(() => {
    setHitCount(hits.length === total ? 'all' : hits.length);
  }, [hits, total]);

  return (
    <div className={styles.container}>
      <input
        type="search"
        className={styles.input}
        data-animate="true"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <div className={styles.icon} data-animate="true">
        <FiSearch />
      </div>
      <span className={styles.hits}>Showing {hitCount} posts</span>
    </div>
  );
};

export default CustomSearchBox;
