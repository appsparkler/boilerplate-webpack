const webpackBaseConfig = require('./config.common');
const devConfig = {
  mode: require('./mode/development'),
  entry: require('./entry/development'),
  module: require('./module/development'),
  plugins: require('./plugins/development'),
  output: require('../.webpack/output/development'),
  resolve: require('../.webpack/resolve/development')
};

module.exports = Object.assign(webpackBaseConfig, devConfig);
