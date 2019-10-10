const paths = require('../config/paths');
const output = require('./output/common');
const plugins = require('./plugins/common');
const mode = require('./mode/common');
const entry = require('./entry/common');
const resolve = require('./resolve/common');

module.exports = {
  mode,
  context: paths.baseDir,
  entry,
  resolve,
  output,
  plugins
};
