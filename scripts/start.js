const result = {};
setBrandOnResult
    .call(result)
    .then(startDevServer.bind(result));

// abstracted functions
/* eslint-disable */
function startDevServer() {
  try {
    process.env.NODE_ENV = process.env.NODE_ENV || 'development';
    process.env.BRAND = this.brand || 'DEFAULT';
    require('../config/env'); // SETUP environment variables
    const chalk = require('chalk');
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const webpackConfig = require('../.webpack/config.development');
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

function setBrandOnResult() {
  try {
    const inquirer = require('inquirer');
    const glob = require('glob');
    const paths = require('../config/paths');
    const {resolve} = require('path');

    const brands = glob.sync('*', {
      cwd: resolve(paths.srcDir, 'brands'),
    });
    return inquirer
        .prompt([
          {
            type: 'rawlist',
            name: 'brand',
            message: 'Select brand:',
            choices: brands || [],
          },
        ])
        .then((answers) => {
          this.brand = answers.brand || 'DEFAULT'
        });
  } catch (e) {

  } finally {

  }
}
