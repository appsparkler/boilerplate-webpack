const resolve = require('path').resolve;

module.exports = {
  baseDir: resolve('./'),
  srcDir: resolve('./src'),
  publicDir: resolve('./public'),
  appIndex: resolve('./src/index.js'),
  buildDir: resolve('./build'),
  appComponents: resolve('./src/components'),
  // DOT-ENV
  dotEnv: {
    development: resolve('./.env.development'),
    production: resolve('./.env.production'),
    analytics: resolve('./.env.analytics'),
  },
};
