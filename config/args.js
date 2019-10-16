const parseArgs = require('minimist');
const parsedArgs = parseArgs(process.argv);

module.exports = {
  brand: parsedArgs.brand || 'DEFAULT',
  stats: parsedArgs.stats || false,
};
