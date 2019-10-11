const commonRules = require('./common');

module.exports = [
  ...commonRules,
  getSassRule()
];

// abstracted methods
function getSassRule() {
  return {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: true,
      prependData: `@import '../../../gcss/${brand}/colors'`
    }
  };
}
