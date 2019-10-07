const commonOutput = require('./common');

const output = Object.assign(commonOutput, {
  filename: 'index-[contenthash:8].js'
});

module.exports = output;
