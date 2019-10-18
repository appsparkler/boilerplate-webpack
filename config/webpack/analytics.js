const webpackBaseConfig = require('./production');

module.exports = Object.assign(webpackBaseConfig, {
  plugins: require('./plugins/analytics')
});
