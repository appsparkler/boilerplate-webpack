const webpackBaseConfig = require('./config.common');
const devServer = require('./devServer');
module.exports = Object.assign(webpackBaseConfig, {
  devServer
});
