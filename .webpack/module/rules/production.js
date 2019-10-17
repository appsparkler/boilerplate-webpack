const commonRules = require('./common');
const jsRule = require('./js-rule');
const sassRule = require('./sass-rule');

module.exports = [
  ...commonRules,
  {
    oneOf: [
      jsRule,
      sassRule
    ]
  }
];
