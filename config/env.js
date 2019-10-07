const dotenv = require('dotenv');
const paths = require('./paths');

const NODE_ENV = process.env.NODE_ENV || 'development';
dotenv.config({
  path: paths.dotEnv[NODE_ENV]
});
