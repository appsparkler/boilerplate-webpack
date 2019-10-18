module.exports = {
  hot:true,
  writeToDisk: true,
  stats: 'errors-warnings',
  open: process.env.WEBPACK_DEV_SERVER_OPEN || 'Google Chrome'
};
