const plugins = require('./plugins');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
  ...plugins,
  new BundleAnalyzerPlugin()
].filter(Boolean);
