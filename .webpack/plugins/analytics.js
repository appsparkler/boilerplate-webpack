const plugins = require('./common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DotEnv = require('dotenv-webpack');
const paths = require('../../config/paths');

module.exports = [
  ...plugins,
  new BundleAnalyzerPlugin({
    analyzerPort: process.env.BRANDS_APP_BUNDLE_ANALYZER_PORT || 8000
  }),
  new DotEnv({
    path: paths.dotEnv.analytics
  })
];
