

// console.log(scssVariables);
module.exports = (function() {
  /* eslint-disable */
  const {brand} = require('../../../../config/args');
  const scssVariables = require(`../../../brands/${brand}/_variables.sass`);
  const bootstrapScss = require('bootstrap/scss/bootstrap.scss');
}());
