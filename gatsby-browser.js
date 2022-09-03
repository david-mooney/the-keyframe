import '@fontsource/merriweather/700.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';

import './src/css/syntax.css';
import './src/css/normalize.css';
import './src/css/colors.css';
import './src/css/layout.css';
import './src/css/typography.css';
import './src/css/animations.css';
import './src/css/accessibility.css';
import './src/css/global.css';

import React from 'react';
import imageZoom from 'fast-image-zoom';
import Layout from './src/components/layout/pageLayout';

export const onClientEntry = () => {
  imageZoom({
    selector: '.gatsby-resp-image-image',
    exceed: true,
  });
};

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
