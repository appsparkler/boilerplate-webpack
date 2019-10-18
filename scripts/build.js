require(`${process.env.INIT_CWD}/utils/inquirer/brand`)()
  .then(require(`${process.env.INIT_CWD}/config/env`).bind('production'))
  .then(runWebpackCompiler);

// abstract functions
/*eslint-disable*/
function runWebpackCompiler() {
  const webpack = require('webpack');
  const webpackConfig = require(`${process.env.INIT_CWD}/config/webpack/production`);
  this.compiler = webpack(webpackConfig);

  this.compiler.run((err, stats) => {
    if (err || stats.hasErrors()) return console.error(stats.compilation.errors.toString({
      colors:true
    }));
    else displayStats(stats);
  });
}

function displayStats(stats) {
  console.log('Build completed...');
}

function setupEnvVariables() {
  process.env.NODE_ENV = 'production';
  require('../config/env');
}
