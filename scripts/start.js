process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('../config/env'); // SETUP environment variables
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../.webpack/config.development');
const compiler = webpack(webpackConfig);
const devServerConfig = getDevServerConfig();
const devServer = new WebpackDevServer(compiler, devServerConfig);
const PORT = process.env.DEV_SERVER_PORT || 8889;

devServer.listen(PORT, () => console.log(`Starting server on http://localhost:${PORT}`));

/* eslint-disable */
function getDevServerConfig() {
  return {
    hot:true,
    writeToDisk: true,
    stats: 'errors-warnings'
  };
}
