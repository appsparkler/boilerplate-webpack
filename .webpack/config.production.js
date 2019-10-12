const commonConfig = require('./config.common');
const productionConfig = {
  mode: require('./mode/production'),
  entry: require('./entry/production'),
  output: require('./output/production'),
  plugins: require('./plugins/production'),
  module: require('./module/production'),
  resolve: require('./resolve/production')
};

module.exports = Object.assign(commonConfig, productionConfig);
