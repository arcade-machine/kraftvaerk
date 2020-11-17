module.exports = (dirname, paths, projectName, browserSync) => {
  return function browserSyncLand() {
    browserSync.init({
      server: {
        baseDir: './build/'
      },
      notify: false,
      port: 80,
    });
  }
};
