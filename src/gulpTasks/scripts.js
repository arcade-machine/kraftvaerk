const gulp = require('gulp'),
      webpack = require('webpack-stream');

module.exports = (dirname, paths, webpackConfig, browserSync) => {
  return function scripts() {
    return gulp.src(dirname + paths.src + 'index.js')
      .pipe(webpack(webpackConfig))
      .on('error', function (err) {
        process.stderr.write(err.message + '\n');
        this.emit('end');
      })
      .pipe(gulp.dest(dirname + paths.static))
      .pipe(browserSync.reload({
        stream: true
      }));
  }
};
