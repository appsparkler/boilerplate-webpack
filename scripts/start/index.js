require(`${process.env.INIT_CWD}/utils/inquirer/brand`)()
    .then(startDevServer);

// abstracted functions
/* eslint-disable */
function startDevServer() {
  try {
    const {INIT_CWD}= process.env;
    require(`${INIT_CWD}/config/env`)('development');
    const chalk = require('chalk');
    const webpack = require('webpack');
    const devServerConfig = require('./dev-server-config');
    const WebpackDevServer = require('webpack-dev-server');
    const webpackConfig = require(`${INIT_CWD}/config/webpack/development`);
    const compiler = webpack(webpackConfig);
    const devServer = new WebpackDevServer(compiler, devServerConfig);
    const PORT = process.env.WEBPACK_DEV_SERVER_PORT || 3000;
    require(`${INIT_CWD}/utils/chalk-logger`)({
      beforeEmptyLines: 2,
      msg: `Initializing dev server with "${process.env.BRAND}" theme...`,
      afterEmptyLines: 2
    });
    devServer.listen(PORT);
  } catch (e) {
    console.log(e);
  } finally {

  }
}
