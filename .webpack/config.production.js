const commonWebpackConfig = require('./config.common');
const plugins = require('./plugins/production');
const mode = require('./mode/production');

module.exports = Object.assign(commonWebpackConfig, {
  plugins,
  mode
});
