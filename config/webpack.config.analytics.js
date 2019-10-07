const webpackBaseConfig = require('./webpack.config.common');
const plugins = require('./.webpack/plugins.analytics');

module.exports = Object.assign(webpackBaseConfig, {
  plugins
});
