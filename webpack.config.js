const NODE_ENV = process.env.NODE_ENV || 'development';
const webpackConfig = require(`./.webpack/config.${NODE_ENV}`);

module.exports = webpackConfig;
