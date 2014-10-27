var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var fileinclude = require('gulp-file-include');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence('clean', 'compile', 'watch', callback);
});

gulp.task('clean', function (callback) {
  del('./dist/**', callback);
});

gulp.task('compile', function(callback) {
  runSequence(['sass', 'move_js', 'move_images'], 'html', callback);
});

gulp.task('watch', function(callback) {
  runSequence(['watch_sass', 'watch_html', 'watch_js', 'watch_images'], callback);
});

// Watchers --------------------------------------------------

// Will watch for changes in the sass directory and compile
gulp.task('watch_sass', function() {
  return gulp.watch('./sass/**', ['sass']);
});

// Will watch for changes in the html directory and compile
gulp.task('watch_html', function() {
  return gulp.watch('./html/**', ['html']);
});

// Will watch for changes in the js directory
gulp.task('watch_js', function() {
  return gulp.watch('./js/**', ['move_js']);
});

// Will watch for changes in the js directory
gulp.task('watch_images', function() {
  return gulp.watch('./images/**', ['move_images']);
});

// Compilers --------------------------------------------------

// Sass: Will compile Sass into CSS
gulp.task('sass', function() {
  return gulp.src(['./sass/**/*.scss', './sass/**/*.css'])
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', function() {
  return gulp.src(['./html/**/*.html', '!./html/**/_*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dist/'));
});

// File movers --------------------------------------------------

// Move JavaScript files into build directory
gulp.task('move_js', function() {
  return gulp.src('./js/**/*.js')
    .pipe(gulp.dest('./dist/js/'));
});

// Move image files into build directory
gulp.task('move_images', function() {
  return gulp.src('./images/**')
    .pipe(gulp.dest('./dist/images'));
});
