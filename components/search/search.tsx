import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import { BsSearch, BsFillXCircleFill } from 'react-icons/bs';
import { useSearch } from '@hooks/use-search';
import TagFilters from './tag-filters';
import styles from './search.module.css';

type Props = {
  tags: string[];
};

const Search = ({ tags }: Props) => {
  const ref = useRef<HTMLInputElement>();
  const router = useRouter();
  const { query, setQuery } = useSearch();

  useEffect(() => {
    if (!router.isReady) return;
    setQuery((router.query.q as string) || '');
  }, [router.isReady, router.query, setQuery]);

  useEffect(() => {
    document.addEventListener('keyup', (event) => {
      if (event.key !== '/' || event.ctrlKey || event.metaKey) return;

      const isUsingInput = /^(?:input|textarea|select)$/i.test(
        (event.target as HTMLInputElement).tagName
      );

      if (!isUsingInput) {
        event.preventDefault();
        document.getElementById('search').focus();
      }
    });
  }, []);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const clearSearch = () => {
    setQuery('');
    ref.current.focus();
  };

  return (
    <>
      <div className={styles.container}>
        <input
          id="search"
          ref={ref}
          className={styles.input}
          type="search"
          placeholder="Search all posts (press '/')"
          value={query}
          onChange={handleChange}
          data-animate="true"
        />
        <div
          className={styles.icon}
          data-animate="true"
          onClick={clearSearch}
          data-active={query.length > 0}
        >
          {query.length ? <BsFillXCircleFill /> : <BsSearch />}
        </div>
      </div>

      <TagFilters tags={tags} />
    </>
  );
};

export default Search;
