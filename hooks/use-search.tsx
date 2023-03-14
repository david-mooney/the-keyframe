import { useRouter } from 'next/router';
import React, { useState, useContext } from 'react';
import useDebouncedEffect from './use-debounced-effect';

export const setQueryParam = (query: string, route) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);

  if (query.length > 0) {
    searchParams.set('q', query);
  } else {
    searchParams.delete('q');
  }

  url.search = searchParams.toString();
  route.push(url.toString(), undefined, { shallow: true });
};

type SearchProps = {
  query: string;
  results: any[];
  setQuery: (query: string) => void;
};

const SearchContext = React.createContext<SearchProps | null>(null);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children, initialQuery }) => {
  const [query, setQuery] = useState(initialQuery || '');
  const [results, setResults] = useState(null);
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
    200
  );

  return (
    <SearchContext.Provider value={{ query, setQuery, results }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
