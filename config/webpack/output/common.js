const {INIT_CWD, BRAND} = process.env;

const paths = require(`${INIT_CWD}/config/paths`);

const output = {
  path: `${paths.buildDir}-${BRAND || 'DEFAULT'}`,
  filename: `[name]/js-clientlib-[contenthash:8]/js/[name]-script.js`
};

module.exports = output;
