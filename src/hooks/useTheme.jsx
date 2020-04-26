import { useEffect, useState } from 'react';
import { storageId, getItem, setItem } from '@utilities/localStorage';

export default initialValue => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const storedState = getItem(storageId);
    const query = window.matchMedia('(prefers-color-scheme: dark)');

    if (typeof storedState === 'boolean') {
      setStoredValue(storedState);
    } else {
      setStoredValue(query.matches);
    }
  }, []);

  const setValue = value => {
    setStoredValue(value);
    setItem(storageId, value);
  };

  return [storedValue, setValue];
};
