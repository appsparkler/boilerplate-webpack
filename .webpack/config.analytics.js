const webpackBaseConfig = require('./config.common');
const plugins = require('./plugins/analytics');
const commonOutput = require('./output/analytics');

module.exports = Object.assign(webpackBaseConfig, {
  output,
  plugins
});
