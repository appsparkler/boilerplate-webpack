const paths = require('../../config/paths');
const brand = require('../../config/args').brand;

const output = {
  path: `${paths.buildDir}-${brand}`,
  filename: `[name]/js-clientlib-[contenthash:8]/js/[name]-script.js`
};

module.exports = output;
