const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const args = require('../config/args');
const devServerConfig = require('../.webpack/devServer/development');
const webpackConfig = require('../.webpack/config.development');
const compiler = webpack(webpackConfig);
const devServer = new WebpackDevServer(compiler, devServerConfig);

devServer.listen('8888', () => console.log('Starting server on http://localhost:8888'))

// compiler.run((err, stats) => {
//   if (err || stats.hasErrors()) return console.error(err, stats);
//   else displayStats(stats);
// });


/*eslint-disable*/
function displayStats(stats) {
  if(args.stats) console.log(stats.toString({
      colors: true
    }));
  console.log('Build completed...')
}
