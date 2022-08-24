import '@fontsource/lato';
import '@fontsource/merriweather';
import './src/css/syntax.css';
import './src/css/normalize.css';
import './src/css/colors.css';
import './src/css/layout.css';
import './src/css/typography.css';
import './src/css/animations.css';
import './src/css/accessibility.css';
import './src/css/global.css';

import React from 'react';
import Layout from './src/components/layout/pageLayout';
import zoomImage from './src/utilities/imageZoom';

export const onRouteUpdate = () => {
  zoomImage();
};

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
