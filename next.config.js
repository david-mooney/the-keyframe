const { version } = require('./package.json');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  swcMinify: true,
  productionBrowserSourceMaps: true,
  publicRuntimeConfig: { version },
});
