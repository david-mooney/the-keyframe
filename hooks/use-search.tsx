import { useRouter } from 'next/router';
import React, { useEffect, useState, useContext } from 'react';
import setQueryParam from '@lib/set-query-param';
import useDebouncedEffect from '@hooks/use-debounced-effect';

type SearchProps = {
  query: string;
  results: any[];
  setQuery: (query: string) => void;
};

const SearchContext = React.createContext<SearchProps | null>(null);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children, initialResults, initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || '');
  const [results, setResults] = useState(initialResults || null);
  const router = useRouter();

  useDebouncedEffect(
    () => {
      setQueryParam(query, router);

      if (query.length > 0) {
        fetch(`/api/search?q=${query}`)
          .then((res) => res.json())
          .then((data) => {
            setResults(data);
          });
      } else {
        setResults(null);
      }
    },
    [query],
    170
  );

  return (
    <SearchContext.Provider value={{ query, setQuery, results }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
