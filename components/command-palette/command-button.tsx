import { BsCommand } from 'react-icons/bs';
import Button from '../buttons/button';

const CommandButton = ({ setOpen }) => {
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Button onClick={handleClick}>
      <BsCommand size="50%" />
    </Button>
  );
};

export default CommandButton;
