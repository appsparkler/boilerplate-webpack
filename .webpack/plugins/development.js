const commonPlugins = require('./common');
const DotEnv = require('dotenv-webpack');
const paths = require(`${process.env.INIT_CWD}/config/paths`);
const webpack = require('webpack');

module.exports = [
  ...commonPlugins,
  new DotEnv({
    path: paths.dotEnv.development
  }),
  // new webpack.HotModuleReplacementPlugin()
];
