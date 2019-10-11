const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');
const paths = require('../../config/paths');

module.exports = [
  new HtmlWebpackPlugin({
    template: resolve(paths.publicDir, 'index.html')
  }),
  new CleanWebpackPlugin()
];
