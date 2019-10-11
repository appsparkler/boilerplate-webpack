const webpack = require('webpack');
const parseArgs = require('minimist');
const webpackConfig = {};
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) return console.error(err, stats);
  else displayStats(stats);
});

console.dir(parseArgs(process.argv));

function displayStats(stats) {
  console.log(stats.toString({
    colors: true
  }));
}
