const gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      strip = require('gulp-strip-comments'),
      stripCssComments = require('gulp-strip-css-comments'),
      minify = require('gulp-minify'),
      minifyCss = require('gulp-minify-css'),
      uglify = require('gulp-uglify');

var scss = './src/css/main.scss';
var css = './build/css'
var allSass = './src/css/partials/*.scss';

gulp.task('sass', function () {
  gulp.src(scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss())
    .pipe(stripCssComments())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(css));
});

gulp.task('default', function () {
  gulp.watch(allSass, ['sass']);
});