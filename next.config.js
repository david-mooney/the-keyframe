/* eslint-disable @typescript-eslint/no-var-requires */
const { version } = require('./package.json');
const withESM = require('next-transpile-modules')(['fast-image-zoom']);
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(
  withESM({
    swcMinify: true,
    productionBrowserSourceMaps: true,
    publicRuntimeConfig: { version },
  })
);
