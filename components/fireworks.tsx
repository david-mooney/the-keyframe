import { useState, useEffect } from 'react';
import JSConfetti from 'js-confetti';
import { useTheme } from '@hooks/use-theme';
import useKeyCommand from '@hooks/use-key-command';

const light = ['#C98E4A', '#262626'];
const dark = ['#ffc799', '#fcfcfc'];

const Fireworks = () => {
  const { theme } = useTheme();
  const [confetti, setConfetti] = useState(null);
  const [confettiColors, setConfettiColors] = useState(
    theme === 'dark' ? dark : light
  );

  useEffect(() => {
    setConfetti(new JSConfetti());
  }, []);

  useEffect(() => {
    setConfettiColors(theme === 'dark' ? dark : light);
  }, [theme]);

  useKeyCommand('ctrl+a', () => {
    confetti.addConfetti({ confettiColors });
  });

  return null;
};

export default Fireworks;
