import React, { useState, useContext } from 'react';
import useDebouncedEffect from './use-debounced-effect';

export const setQueryParam = (query: string) => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);

  if (query.length > 0) {
    searchParams.set('q', query);
  } else {
    searchParams.delete('q');
  }

  url.search = searchParams.toString();
  window.history.pushState({}, '', url.toString());
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

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);

  useDebouncedEffect(
    () => {
      setQueryParam(query);

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
    250
  );

  return (
    <SearchContext.Provider value={{ query, setQuery, results }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
