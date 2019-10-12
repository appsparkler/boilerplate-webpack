setupEnvVariables();
const webpack = require('webpack');
const args = require('../config/args');
const webpackConfig = require('../.webpack/config.analytics');
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
  if (err || stats.hasErrors()) return console.error(err, stats);
  else displayStats(stats);
});

/*eslint-disable*/
function displayStats(stats) {
  if(args.stats) console.log(stats.toString({
      colors: true
    }));
  console.log('Build completed...')
}

function setupEnvVariables() {
  process.env.NODE_ENV = 'analytics';
  require('../config/env');
}
