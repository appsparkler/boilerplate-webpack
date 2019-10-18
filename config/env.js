module.exports = function(env) {
  process.env.NODE_ENV = env || 'development';
  const dotenv = require('dotenv');
  const paths = require('./paths');

  dotenv.config({
    path: paths.dotEnv[process.env.NODE_ENV],
  });
}
