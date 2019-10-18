const {INIT_CWD} = process.env;
const inquireBrand = require(`${INIT_CWD}/utils/inquirer/brand`);
inquireBrand()
    .then(startDevServer);

// abstracted functions
/* eslint-disable */
function startDevServer() {
  try {
    require(`${INIT_CWD}/config/env`)('development');
    const chalk = require('chalk');
    const webpack = require('webpack');
    const devServerConfig = require('./dev-server-config');
    const WebpackDevServer = require('webpack-dev-server');
    const webpackConfig = require(`${INIT_CWD}/config/webpack/development`);
    const compiler = webpack(webpackConfig);
    const devServer = new WebpackDevServer(compiler, devServerConfig);
    const PORT = process.env.WEBPACK_DEV_SERVER_PORT || 3000;
    //
    console.log();
    console.log(chalk.bgGreenBright.black(`Initializing dev server with "${process.env.BRAND}" theme...`));
    console.log();
    devServer.listen(PORT, () => console.log(`Starting server on http://localhost:${PORT}`));
  } catch (e) {
    console.log(e);
  } finally {

  }
}
