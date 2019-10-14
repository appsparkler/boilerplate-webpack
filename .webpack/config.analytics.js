const webpackBaseConfig = require('./config.production');

module.exports = Object.assign(webpackBaseConfig, {
  plugins: require('./plugins/analytics')
});
