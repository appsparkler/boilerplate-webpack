const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const brand = process.env.BRAND || 'DEFAULT';
const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  test: /\.(sass|scss)$/,
  use: [
    // style-loader
    require.resolve('style-loader'), // for dev mode only (for production we can try mini-css-extract plugin)
    // MiniCssExtractPlugin-loader
    isProduction && {
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
    isProduction && {
      loader: require.resolve('postcss-loader'),
      options: {
        indent: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          require('postcss-preset-env')({
            autoprefixer: {
              flexbox: 'no-2009'
            }
          })
        ],
        sourceMap: true
      }
    },
    // resolve-url-loader
    isProduction && {
      loader: require.resolve('resolve-url-loader'),
      options: {
        sourceMap: isProduction,
      }
    },
    // sass-loader
    {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: isProduction,
        prependData: (ctx) => {
          if(ctx.resourcePath.match(/\.scss/)) return `@import '../../../src/brands/${brand}/variables';`;
          else return `@import '../../../brands/${brand}/variables'`;
        }
      }
    }
  ].filter(Boolean),
  // Don't consider CSS imports dead code even if the
  // containing package claims to have no side effects.
  // Remove this when webpack adds a warning or an error for this.
  // See https://github.com/webpack/webpack/issues/6571
  sideEffects: true,
};
