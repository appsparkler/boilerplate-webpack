const output = require('./output/common');
const plugins = require('./plugins/common');
const paths = require('../config/paths');
const mode = require('./mode/common');

module.exports = {
  mode,
  context: paths.baseDir,
  entry: paths.appIndex,
  output,
  plugins
};
