const output = require('./output');
// const devServer = require('./devServer');
const plugins = require('./plugins/common');
const paths = require('../config/paths');

module.exports = {
  context: paths.baseDir,
  entry: paths.appIndex,
  output,
  // devServer,
  plugins
};
