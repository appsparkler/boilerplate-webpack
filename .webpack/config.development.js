const webpackBaseConfig = require('./config.common');
const mode = require('./mode/development');
const entry = require('./entry/development');
const devModule = require('./module/development');
const plugins = require('./plugins/development');
const output = require('../.webpack/output/development');
const resolve = require('../.webpack/resolve/development');

module.exports = Object.assign(webpackBaseConfig, {
  mode,
  entry,
  module: devModule,
  plugins,
  output,
  resolve
});
