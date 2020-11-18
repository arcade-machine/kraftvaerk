const gulp = require('gulp');

module.exports = (dirname, paths) => {
    return function mocks() {
        return gulp.src(dirname + paths.src + 'media/mocks/**/*')
            .pipe(gulp.dest(dirname + paths.static + 'media/mocks/'));
    }
};
