import { BsCommand } from 'react-icons/bs';
import Button from '@components/buttons/button';

const CommandButton = ({ setOpen }) => {
  const id = 'command-button';

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Button id={id} text="Open command palette" onClick={handleClick}>
      <BsCommand size="50%" />
    </Button>
  );
};

export default CommandButton;
