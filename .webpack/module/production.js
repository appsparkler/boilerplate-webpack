const commonModule = require('./common');
const rules = require('./rules/production');

module.exports = Object.assign(commonModule,{
  rules
});
