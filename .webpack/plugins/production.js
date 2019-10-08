const commonPlugins = require('./common');
const DotEnv = require('dotenv-webpack');
const paths = require('../../config/paths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  ...commonPlugins,
  new DotEnv({
    path: paths.dotEnv.production,
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: 'static/css/[name].[contenthash:8].css'
  }),
];
