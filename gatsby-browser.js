import '@fontsource/aleo';
import './src/css/normalize.css';
import './src/css/colors.css';
import './src/css/spacing.css';
import './src/css/typography.css';
import './src/css/animations.css';
import './src/css/global.css';
import 'prismjs/themes/prism.css'; // Highlighting for code blocks

import React from 'react';
import { AnimatePresence } from 'framer-motion';

export const wrapPageElement = ({ element }) => {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>;
};
