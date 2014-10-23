var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var stylesheet_files = ['./sass/**/*.scss', './sass/**/*.css'];

gulp.task('sass', function() {
  return gulp.src(stylesheet_files)
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass'], function() {
  gulp.watch(stylesheet_files, ['sass']);
});

gulp.task('default', ['sass', 'watch']);