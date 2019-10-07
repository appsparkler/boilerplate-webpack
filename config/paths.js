const path = require('path');

module.exports = {
  baseDir: path.resolve('./'),
  appIndex: path.resolve('./src/index.js'),
  buildDir: path.resolve('./build'),
  // dotEnv
  dotEnv: path.resolve('./env'),
  dotEnvDev: path.resolve('./env.development'),
  dotEnvProd: path.resolve('./env.production'),
  dotEnvAnalytics: path.resolve('./env.analytics')
  //
};
