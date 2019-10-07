const webpackBaseConfig = require('./config.common');
const plugins = require('./plugins/analytics');
const output = require('./output/analytics');
const mode = require('./mode/analytics');

module.exports = Object.assign(webpackBaseConfig, {
  mode,
  output,
  plugins
});
