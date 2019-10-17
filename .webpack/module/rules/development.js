const commonRules = require('./common');
const preRule = require('./pre-rule');
const jsRule = require('./js-rule');
const sassRule = require('./sass-rule');

module.exports = [
  ...commonRules,
  preRule,
  {
    oneOf: [
      jsRule,
      sassRule
    ],
  },
];

// abstracted methods
