const webpackBaseConfig = require('./config.common');
const plugins = require('./plugins.analytics');

module.exports = Object.assign(webpackBaseConfig, {
  plugins
});
