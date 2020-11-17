const gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      imageminMozjpeg = require('imagemin-mozjpeg'),
      imageminOptipng = require('imagemin-optipng'),
      imageminSvgo = require('imagemin-svgo');

module.exports = (dirname, paths) => {
  return function img() {
    return gulp.src([dirname + paths.src + '/media/img/**/*', '!' + dirname + paths.src + '/media/img/sprite'])
      .pipe(imagemin([
        imageminMozjpeg({quality: 85, progressive: true}),
        imageminOptipng({optimizationLevel: 5}),
        imageminSvgo()
      ],))
      .on('error', function (err) {
        process.stderr.write(err.message + '\n');
        this.emit('end');
      })
      .pipe(gulp.dest(dirname + paths.static + 'media/img/'))
  }
};
