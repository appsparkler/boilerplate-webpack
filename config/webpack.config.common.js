const output = require('./.webpack/output');
const devServer = require('./.webpack/devServer');
const plugins = require('./.webpack/plugins.common');
const paths = require('./paths');

module.exports = {
  context: paths.baseDir,
  entry: paths.appIndex,
  output,
  devServer,
  plugins
};
