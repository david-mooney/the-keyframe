import './src/styles/test.css';
import React from 'react';
import { ThemeWrapper } from '@components/themeContext';
import LayoutWrapper from '@components/layout/layoutWrapper';

export const wrapRootElement = data => <ThemeWrapper {...data} />;
export const wrapPageElement = data => <LayoutWrapper {...data} />;
