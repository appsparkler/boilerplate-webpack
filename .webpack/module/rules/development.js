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
          // prependData: `@import '../../../brands/${brand}/variables'`
          prependData: (ctx) => {
            if(ctx.resourcePath.match(/\.scss/)) return `@import '../../../src/brands/${brand}/variables';`;
            else return `@import '../../../brands/${brand}/variables'`;
          }
        }
      }
    ]
  };
}
