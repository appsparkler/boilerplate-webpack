const commonPlugins = require('./common');
const DotEnv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const paths = require('../../config/paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  ...commonPlugins,
  new DotEnv({
    path: paths.dotEnv.analytics
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '/[name]/css-clientlib-[contenthash:8]/css/styles.css',
  }),
  new BundleAnalyzerPlugin({
    analyzerPort: process.env.BRANDS_APP_BUNDLE_ANALYZER_PORT || 8000
  })
];
