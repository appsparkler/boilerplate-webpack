const paths = require(`${process.env.INIT_CWD}/config/paths`);

module.exports = {
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  include: paths.srcDir,
  loader: require.resolve('babel-loader'),
  options: {
    presets: ['@babel/env', '@babel/react']
  }
};
