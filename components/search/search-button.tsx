import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Button from '@components/buttons/button';

const SearchButton = ({}) => {
  const [open, setOpen] = useState(false);
  const id = 'search-button';
  const pageWrapper = 'page-wrapper';

  useEffect(() => {
    document.getElementById(pageWrapper).dataset.searchOpen = open
      ? 'true'
      : 'false';
  }, [open]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Button id={id} text="Open search input" onClick={handleClick}>
      <BsSearch size="50%" />
    </Button>
  );
};

export default SearchButton;
