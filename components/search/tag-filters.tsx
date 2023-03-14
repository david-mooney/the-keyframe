import React from 'react';
import TagFilter from './tag';
import { useSearch } from '@hooks/use-search';
import styles from './tag-filters.module.css';

const TagFilters = ({ tags }) => {
  const { results, query, setQuery } = useSearch();

  const handleTagClick = (tag) => {
    let tagQuery = '';

    if (query.toLowerCase().includes(tag)) {
      tagQuery = query.replace(tag, '');
    } else {
      tagQuery = query ? `${query} ${tag}` : tag;
    }

    setQuery(tagQuery.trim());
  };

  const tagNotFound = (tag) => {
    if (query.toLowerCase().includes(tag) || !results?.length) {
      return false;
    }

    return results.every((result) => !result.tags.includes(tag));
  };

  return (
    <div className={styles.container}>
      {tags.map((tag) => (
        <TagFilter
          key={tag}
          value={tag}
          callback={handleTagClick}
          checked={query.toLowerCase().includes(tag)}
          disabled={tagNotFound(tag)}
        />
      ))}
    </div>
  );
};

export default TagFilters;
