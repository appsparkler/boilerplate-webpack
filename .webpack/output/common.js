const paths = require('../../config/paths');
const { resolve } = require('path');

const output = {
  path: resolve(paths.buildDir),
  filename: '[name]/js-clientlib-[contenthash:8]/js/[name]-script.js'
};

module.exports = output;
