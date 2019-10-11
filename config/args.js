const parseArgs = require('minimist');

module.exports = {
  brand: parseArgs(process.argv).brand || 'brand1'
};
