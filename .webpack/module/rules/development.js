const commonRules = require('./common');
const brand = require('../../../config/args').brand;

module.exports = [
  ...commonRules,
  getSassRule()
];

// abstracted methods
function getSassRule() {
  return {
    test: /\.(sass|scss)$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
          prependData: `@import '../../../gcss/${brand}/colors'`
        }
      }
    ]
  };
}
