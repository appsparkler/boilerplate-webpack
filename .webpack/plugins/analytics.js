const plugins = require('./common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
  ...plugins,
  new BundleAnalyzerPlugin()
].filter(Boolean);