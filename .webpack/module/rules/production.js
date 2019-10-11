const commonRules = require('./common');

module.exports = [
  ...commonRules,
  getSassRule()
];

// abstracted functions
function getSassRule() {
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  const brand = require('../../../config/args').brand;
  //
  return {
    test: /\.(sass|scss)$/,
    use: [
      // style-loader
      require.resolve('style-loader'), // for dev mode only (for production we can try mini-css-extract plugin)
      // MiniCssExtractPlugin-loader
      {
        loader: MiniCssExtractPlugin.loader,
        // options: shouldUseRelativeAssetPaths ? { publicPath: '../../' } : {},
      },
      // css-loader
      {
        loader: require.resolve('css-loader'),
        options:{
          importLoaders: 2,
          sourceMap: true,
        }
      },
      // postcss-loader
      {
        loader: require.resolve('postcss-loader'),
        options: {
          indent: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009'
              }
            }),
            // require('post-normalize-css')()
          ],
          sourceMap: true
        }
      },
      // resolve-url-loader
      {
        loader: require.resolve('resolve-url-loader'),
        options: {
          sourceMap: true,
        }
      },
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
          prependData: `@import '../../../gcss/${brand}/colors'`
        }
      }
    ],
    // Don't consider CSS imports dead code even if the
    // containing package claims to have no side effects.
    // Remove this when webpack adds a warning or an error for this.
    // See https://github.com/webpack/webpack/issues/6571
    sideEffects: true,
  }
}
