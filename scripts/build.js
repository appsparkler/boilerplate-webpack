const webpack = require('webpack');
// const parseArgs = require('minimist');
const webpackConfig = {};

webpackConfig.mode = require('../.webpack/mode/production');
webpackConfig.entry = require('../.webpack/entry/production');
webpackConfig.module = require('../.webpack/module/production');
webpackConfig.output = require('../.webpack/output/production');
webpackConfig.plugins = require('../.webpack/plugins/production');
webpackConfig.resolve = require('../.webpack/resolve/production');
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) return console.error(err, stats);
  else displayStats(stats);
});

/*eslint-disable*/
function displayStats(stats) {
  // console.log(stats.toString({
  //   colors: true
  // }));
  console.log('Build completed...')
}
