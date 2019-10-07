const output = require('./output/common');
const plugins = require('./plugins/common');
const paths = require('../config/paths');

module.exports = {
  context: paths.baseDir,
  entry: paths.appIndex,
  output,
  plugins
};
