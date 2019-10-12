const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../.webpack/config.development');
const compiler = webpack(webpackConfig);
const devServerConfig = getDevServerConfig();
const devServer = new WebpackDevServer(compiler, devServerConfig);
const PORT = '8888';

devServer.listen(PORT, () => console.log(`Starting server on http://localhost:${PORT}`));

/* eslint-disable */
function getDevServerConfig() {
  return {
    hot:true,
    writeToDisk: true,
    stats: 'errors-warnings'
  };
}
