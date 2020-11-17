const gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  rename = require("gulp-rename"),
  svgstore = require('gulp-svgstore');

module.exports = (dirname, paths) => {
  return function svg() {
    return gulp.src(dirname + paths.src + '/media/img/sprite/*.svg')
      .pipe(imagemin([
        imagemin.svgo({
          plugins: [
            {removeViewBox: false}
          ]
        })
      ]))
      .pipe(svgstore({inlineSvg: true}))
      .pipe(rename('sprite.svg'))
      .pipe(gulp.dest(dirname + paths.src + 'media/img/'));
  }
};
