const path = require('path');

module.exports = {
  baseDir: path.resolve('./'),
  appIndex: path.resolve('./src/index.js'),
  buildDir: path.resolve('./build'),
  dotEnv:{ 
    development: path.resolve('./.env.development'),
    production: path.resolve('./.env.production'),
    analytics: path.resolve('./.env.analytics')
  }
};
