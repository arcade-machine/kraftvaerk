"use strict";

const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    webpackConfig = require('./webpack.config');

const packageJSON = require('./package.json');
const projectName = packageJSON.name || process.env.npm_package_name;

const taskFolder = './src/gulpTasks/';

const paths = {
    buildFolder: `/build/`,
    static: `/build/assets/`,
    src: '/src/',
    browserSyncSrc: './src/'
};

const style = require(`${taskFolder}style`)(__dirname, paths, browserSync);
const clean = require(`${taskFolder}clean`)(__dirname, paths);
const fonts = require(`${taskFolder}fonts`)(__dirname, paths);
const mocks = require(`${taskFolder}mocks`)(__dirname, paths);
const pugToHTML = require(`${taskFolder}pugToHTML`)(__dirname, paths, browserSync, projectName);
const scripts = require(`${taskFolder}scripts`)(__dirname, paths, webpackConfig, browserSync);
const webp = require(`${taskFolder}webp`)(__dirname, paths);
const img = require(`${taskFolder}img`)(__dirname, paths);
const svg = require(`${taskFolder}svg`)(__dirname, paths);
const browserSyncTask = require(`${taskFolder}browserSync`)(__dirname, paths, projectName, browserSync);

function watch() {
    gulp.watch([paths.browserSyncSrc + '**/*.scss'], style);
    gulp.watch([paths.browserSyncSrc + '**/*.js'], scripts);
    gulp.watch([paths.browserSyncSrc + '**/*.pug'], pugToHTML);
}

exports.clean = clean;

exports.img = gulp.series(
    svg,
    gulp.parallel(webp, img)
);

exports.default =
    gulp.parallel(
        gulp.series(
            gulp.parallel(style, pugToHTML),
            browserSyncTask
        ),
        watch,
        scripts,
        fonts,
        mocks
    );

exports.build = gulp.series(
    clean,
    gulp.parallel(
        style,
        pugToHTML,
        scripts,
        webp,
        img,
        svg,
        fonts,
        mocks
    )
);
