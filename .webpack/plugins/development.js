const commonPlugins = require('./common');
const DotEnv = require('dotenv-webpack');
const paths = require('../../config/paths');

module.exports = [
  ...commonPlugins,
  new DotEnv({
    path: paths.dotEnv.development
  })
];
