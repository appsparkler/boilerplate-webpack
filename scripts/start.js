const setBrandOnResult = require('./inquire-brand');
const result = {};
//

console.log(process);

setBrandOnResult
    .call(result)
    .then(startDevServer.bind(result));

// abstracted functions
/* eslint-disable */
function startDevServer() {
  try {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    require('../config/env'); // SETUP environment variables
    const chalk = require('chalk');
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const webpackConfig = require(`${process.env.INIT_CWD}/config/development`);
    const compiler = webpack(webpackConfig);
    const devServerConfig = getDevServerConfig();
    const devServer = new WebpackDevServer(compiler, devServerConfig);
    const PORT = process.env.DEV_SERVER_PORT || 8889;
    //
    console.log(chalk.bgGreenBright.black(`Initializing dev server with "${process.env.BRAND}" theme...`));
    devServer.listen(PORT, () => console.log(`Starting server on http://localhost:${PORT}`));
  } catch (e) {
    console.error(e);
  } finally {

  }
}

function getDevServerConfig() {
  return {
    hot:true,
    writeToDisk: true,
    stats: 'errors-warnings'
  };
}
