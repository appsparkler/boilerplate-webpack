const paths = require('../../config/paths');
const { resolve } = require('path');

module.exports = {
  modules: [
    resolve(paths.srcDir),
    resolve(paths.baseDir, 'node_modules')
  ],
  extensions: ['.js', '.sass', '.scss']
};
