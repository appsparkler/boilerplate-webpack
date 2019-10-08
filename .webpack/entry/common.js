const paths = require('../../config/paths');
const resolve = require('path').resolve;

module.exports = {
  groupA_foo: resolve(paths.appComponents, 'groupA/foo/styles.sass'),
  groupA_bar: resolve(paths.appComponents, 'groupA/bar/styles.sass'),
};
