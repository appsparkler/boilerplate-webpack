const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
  new HtmlWebpackPlugin(),
  new CleanWebpackPlugin()
];
