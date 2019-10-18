const commonPlugins = require('./common');
const DotEnv = require('dotenv-webpack');
const paths = require(`${process.env.INIT_CWD}/config/paths`);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  ...commonPlugins,
  new DotEnv({
    path: paths.dotEnv.production,
  }),
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: '/[name]/css-clientlib-[contenthash:8]/css/styles.css',
  })
];
