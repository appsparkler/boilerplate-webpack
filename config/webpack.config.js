const { devServer, plugins, output } = require('./.webpack');
const paths = require('./paths');

module.exports = {
  context: paths.baseDir,
  entry: paths.appIndex,
  output,
  devServer,
  plugins
};
