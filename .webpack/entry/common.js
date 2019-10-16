const paths = require('../../config/paths');
const resolve = require('path').resolve;

module.exports = {
  "vendors-styles": ['bootstrap/scss/bootstrap'],
  "vendor-libs": ['bootstrap/js/src'],
  ['components/groupA/foo']: resolve(paths.appComponents, 'groupA/foo'),
  ['components/groupA/bar']: resolve(paths.appComponents, 'groupA/bar'),
};
