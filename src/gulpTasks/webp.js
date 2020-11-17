const gulp = require('gulp'),
      rename = require("gulp-rename"),
      imagemin = require('gulp-imagemin'),
      imageminWebp = require('imagemin-webp');

module.exports = (dirname, paths) => {
  return function webp() {
    return gulp.src(dirname + paths.src + '/media/img/**/*.{jpg,png}')
      .pipe(imagemin([
        imageminWebp({quality: 75}),
      ]))
      .pipe(rename({extname: '.webp'}))
      .on('error', function (err) {
        process.stderr.write(err.message + '\n');
        this.emit('end');
      })
      .pipe(gulp.dest(dirname + paths.static + 'media/img/'))
  }
}
