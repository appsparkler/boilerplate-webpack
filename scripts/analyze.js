const {INIT_CWD} = process.env;
require(`${INIT_CWD}/utils/inquirer/brand`)()
  .then(require(`${INIT_CWD}/config/env`).bind('analytics'))
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
