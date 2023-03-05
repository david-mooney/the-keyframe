import React, { useState, useEffect } from 'react';
import styles from './search.module.css';

const Search = () => {
  const id = 'search';
  const [search, setSearch] = useState('');

  useEffect(() => {
    document.addEventListener('keyup', (event) => {
      if (event.key !== '/' || event.ctrlKey || event.metaKey) return;

      const isUsingInput = /^(?:input|textarea|select|button)$/i.test(
        (event.target as HTMLInputElement).tagName
      );

      if (isUsingInput) return;

      event.preventDefault();
      document.getElementById(id).focus();
    });
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        id={id}
        className={`${styles.input} underline`}
        type="text"
        placeholder="Search (press '/')"
        value={search}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
