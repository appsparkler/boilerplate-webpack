const inquireBrands = require('./inquire-brand');
//
setupEnvVariables();
inquireBrands()
    .then(runCompiler);

/*eslint-disable*/
function runCompiler() {
  try {
    const webpack = require('webpack');
    const webpackConfig = require(`${process.env.INIT_CWD}/config/webpack/analytics`);
    const compiler = webpack(webpackConfig);

    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) return console.error(err, stats);
      else displayStats(stats);
    });
  } catch (e) {
    console.log(e);
  } finally {

  }
}

/*eslint-disable*/
function displayStats(stats) {
  console.log('Build completed...')
}

function setupEnvVariables() {
  process.env.NODE_ENV = 'analytics';
  require('../config/env');
}
