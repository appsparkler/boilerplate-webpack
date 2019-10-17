const commonRules = require('./common');

module.exports = [
  ...commonRules,
  getPreRule(),
  {
    oneOf: [
      getJSPlusRule(),
      getSassRule(),
    ],
  },
];

// abstracted methods
function getJSPlusRule() {
  const paths = require('../../../config/paths');
  return {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: paths.srcDir,
    loader: require.resolve('babel-loader'),
    options: {
      presets: ['@babel/env', '@babel/react']
      // customize: require.resolve(
      // 	'babel-preset-react-app/webpack-overrides'
      // ),
      // plugins: [
      //   [
      //     // require.resolve('babel-plugin-named-asset-import'),
      //     // {
      //     // 	loaderMap: {
      //     // 		svg: {
      //     // 			ReactComponent:
      //     // 				'@svgr/webpack?-svgo,+titleProp,+ref![path]',
      //     // 		},
      //     // 	},
      //     // },
      //   ],
      // ],
      // This is a feature of `babel-loader` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      // cacheDirectory: true,
      // See #6846 for context on why cacheCompression is disabled
      // cacheCompression: false,
      // compact: isEnvProduction,
    },
  };
}

function getPreRule() {
  const paths = require('../../../config/paths');
  return {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    enforce: 'pre',
    use: [
      {
        options: {
          cache: true,
          // formatter: require.resolve('react-dev-utils/eslintFormatter'),
          eslintPath: require.resolve('eslint'),
          // resolvePluginsRelativeTo: __dirname,
        },
        loader: require.resolve('eslint-loader'),
      },
    ],
    include: paths.srcDir,
  };
}

function getSassRule() {
  const brand = process.env.BRAND || 'DEFAULT';
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
            if (ctx.resourcePath.match(/\.scss/)) return `@import '../../../src/brands/${brand}/variables';`;
            else return `@import '../../../brands/${brand}/variables'`;
          },
        },
      },
    ],
  };
}
