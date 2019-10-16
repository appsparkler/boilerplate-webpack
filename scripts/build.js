setupEnvVariables();
const setBrandOnResult = require('./inquire-brand');
setBrandOnResult()
    .then(runWebpackCompiler);

// abstract functions
/*eslint-disable*/
function runWebpackCompiler() {
  const webpack = require('webpack');
  const webpackConfig = require('../.webpack/config.production');
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
