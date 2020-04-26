import { useEffect, useState } from 'react';
import { storageId, getItem, setItem } from '@utilities/localStorage';

export default initialValue => {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    const storedState = getItem(storageId);

    if (typeof storedState === 'boolean') {
      setStoredValue(storedState);
    } else {
      const query = window.matchMedia('(prefers-color-scheme: dark)');
      setStoredValue(query.matches);
    }

    console.log('running');
  }, []);

  const setValue = value => {
    setStoredValue(value);
    setItem(storageId, value);
  };

  return [storedValue, setValue];
};
