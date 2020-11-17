const gulp = require('gulp');

module.exports = (dirname, paths) => {
  return function fonts() {
    return gulp.src(dirname + paths.src + 'media/fonts/**/*')
      .pipe(gulp.dest(dirname + paths.static + 'media/fonts/'));
  }
};
