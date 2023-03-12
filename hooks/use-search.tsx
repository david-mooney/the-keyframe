import React, { useState, useEffect, useContext, useRef } from 'react';

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
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      fetch(`/api/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => setResults(data));
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <SearchContext.Provider value={{ query, setQuery, results }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
