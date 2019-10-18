const webpackBaseConfig = require('./common');
const devConfig = {
  mode: require('./mode/development'),
  entry: require('./entry/development'),
  module: require('./module/development'),
  plugins: require('./plugins/development'),
  output: require('./output/development'),
  resolve: require('./resolve/development')
};

module.exports = Object.assign(webpackBaseConfig, devConfig);
