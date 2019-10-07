const paths = require('../paths');

const output = {
  path: paths.buildDir,
  filename: 'index-[chunkhash:8].js'
};

console.log(output)

module.exports = output;
