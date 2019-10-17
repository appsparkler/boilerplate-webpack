const paths = require('../../../config/paths');

module.exports = {
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
