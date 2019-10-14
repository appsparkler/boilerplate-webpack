const bus = {};
setupEnvVariables.call(bus);
runWebpackCompiler.call(bus);

// abstract functions
/*eslint-disable*/
function runWebpackCompiler() {
  const webpack = require('webpack');
  const webpackConfig = require('../.webpack/config.production');
  this.compiler = webpack(webpackConfig);

  this.compiler.run((err, stats) => {
    if (err || stats.hasErrors()) return console.error(err, stats);
    else displayStats(stats);
  });
}

function displayStats(stats) {
  const args = require('../config/args');
  if(args.stats) console.log(stats.toString({
      colors: true
    }));
  console.log('Build completed...')
}

function setupEnvVariables() {
  process.env.NODE_ENV = 'production';
  require('../config/env');
}
