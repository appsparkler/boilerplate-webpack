const webpack = require('webpack');
const webpackConfig = {};
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) return console.error(err, stats);
  else displayStats(stats);
});

function displayStats(stats) {
  console.log(stats.toString({
    colors: true
  }));
}
