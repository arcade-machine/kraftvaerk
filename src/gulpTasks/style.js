const gulp = require('gulp'),
  sass = require('gulp-sass'),
  csso = require('gulp-csso'),
  postcss = require('gulp-postcss')

module.exports = (dirname, paths, browserSync) => {
  return function style() {
    return gulp.src(dirname + paths.src + '**/styles.scss')
      .pipe(sass({
        includePaths: './node_modules',
        outputStyle: 'compressed'
      }))
      .on('error', sass.logError)

      .pipe(postcss(
        [
          require('autoprefixer')()
        ]
      ))
      .pipe(
        csso({
          restructure: false,
        })
      )
      .pipe(gulp.dest(dirname + paths.static))
      .pipe(browserSync.reload({
        stream: true
      }))
  }
};
