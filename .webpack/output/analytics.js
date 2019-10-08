const commonOutput = require('./common');

const output = Object.assign(commonOutput, {
  filename: '[name]-[contenthash:8].js'
});

module.exports = output;
