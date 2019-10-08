module.exports = [
  {
    oneOf:[
      getSassRule()
    ]
  }
];

// abstracted functions
function getSassRule() {
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
  //
  return {
    test: /\.(sass|scss)$/,
    use: [
      require.resolve('style-loader'), // for dev mode only (for production we can try mini-css-extract plugin)
      {
        loader: MiniCssExtractPlugin.loader,
        // options: shouldUseRelativeAssetPaths ? { publicPath: '../../' } : {},
      },
      {
        loader: require.resolve('css-loader'),
        options:{
          importLoaders: 2,
          sourceMap: true,
        }
      },
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
