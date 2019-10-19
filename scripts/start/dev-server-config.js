module.exports = {
  hot:true,
  writeToDisk: true,
  stats: 'errors-warnings',
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  }
  // open: process.env.WEBPACK_DEV_SERVER_OPEN || 'Google Chrome'
};
