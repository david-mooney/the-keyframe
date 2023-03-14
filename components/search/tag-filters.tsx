import React from 'react';
import TagFilter from './tag';
import { useSearch } from '@hooks/use-search';
import styles from './tag-filters.module.css';

const TagFilters = ({ tags }) => {
  const { results, query, setQuery } = useSearch();

  const handleTagClick = (tag) => {
    let tagQuery = '';

    tagQuery = query.toLowerCase().includes(tag)
      ? query.replace(tag, '')
      : query
      ? `${query} ${tag}`
      : tag;

    setQuery(tagQuery.trim());
  };

  const isDisabled = (tag) => {
    if (query.toLowerCase().includes(tag)) return false;
    return results?.every((result) => !result.tags.includes(tag));
  };

  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <TagFilter
          key={tag}
          value={tag}
          callback={handleTagClick}
          checked={query.toLowerCase().includes(tag)}
          disabled={isDisabled(tag)}
        />
      ))}
    </div>
  );
};

export default TagFilters;
