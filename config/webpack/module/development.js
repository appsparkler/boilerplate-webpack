const commonModule = require('./common');
const rules = require('./rules/development');

module.exports = Object.assign(commonModule, {
  rules
});
