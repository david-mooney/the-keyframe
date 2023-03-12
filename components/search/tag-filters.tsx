import React from 'react';
import TagFilter from './tag';
import { useSearch } from '@hooks/use-search';
import styles from './tag-filters.module.css';

const TagFilters = ({ tags }) => {
  const { query, setQuery } = useSearch();

  const handleTagClick = (tag) => {
    if (query.includes(tag)) {
      setQuery(query.replace(tag, ''));
    } else {
      setQuery(`${query}${tag}`);
    }
  };

  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <TagFilter
          key={tag}
          value={tag}
          callback={handleTagClick}
          checked={query.includes(tag)}
        />
      ))}
    </div>
  );
};

export default TagFilters;
