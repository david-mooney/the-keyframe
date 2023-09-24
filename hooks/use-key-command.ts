import { useEffect, useRef } from 'react';

const useKeyCommand = (command: string, callback: () => void) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      const commands = command.split(',');
      const matches = commands.map((command) => {
        const keys = command.split('+');

        return keys.every((key) => {
          if (key === 'ctrl') return event.ctrlKey;
          if (key === 'shift') return event.shiftKey;
          if (key === 'alt') return event.altKey;
          if (key === 'meta') return event.metaKey;
          return event.key.toLowerCase() === key.toLowerCase();
        });
      });

      if (matches.some((match) => match)) {
        event.preventDefault();
        callbackRef.current();
      }
    };

    document.addEventListener('keydown', handle);
    return () => document.removeEventListener('keydown', handle);
  }, [command]);
};

export default useKeyCommand;
