const webpackBaseConfig = require('./config.common');
const devServer = require('./devServer');
const plugins = require('./plugins/development');

module.exports = Object.assign(webpackBaseConfig, {
  devServer,
  plugins
});
