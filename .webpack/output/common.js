const paths = require('../../config/paths');

const output = {
  path: paths.buildDir,
  filename: '[name]-[contenthash:8].js'
};

module.exports = output;
