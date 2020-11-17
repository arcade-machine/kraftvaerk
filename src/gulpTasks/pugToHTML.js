const gulp = require('gulp'),
  pug = require('gulp-pug');

module.exports = (dirname, paths, browserSync, projectName) => {
  return function pugToHTML() {
    return gulp.src(dirname + paths.src + 'index.pug')
      .pipe(pug({
        data: {
          projectNamefromConfig: projectName,
          Components: './'
        },
        pretty: false,
      }))
      .pipe(gulp.dest(dirname + paths.buildFolder))
      .pipe(browserSync.reload({
        stream: true
      }))
  };
};
