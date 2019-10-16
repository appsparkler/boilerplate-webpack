const paths = require('../../config/paths');

const output = {
  path: `${paths.buildDir}-${process.env.BRAND || 'DEFAULT'}`,
  filename: `[name]/js-clientlib-[contenthash:8]/js/[name]-script.js`
};

module.exports = output;
