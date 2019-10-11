const parseArgs = require('minimist');
const parsedArgs = parseArgs(process.argv);

module.exports = {
  brand: parsedArgs.brand || 'brand1',
  stats: parsedArgs.stats || false,
};
