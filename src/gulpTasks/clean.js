const del = require('del');

module.exports = (dirname, paths) => {
  return function clean () {
    return del([dirname + paths.static + '**'], {force: true});
  };
};
