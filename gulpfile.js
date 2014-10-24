var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var stylesheet_files = ['./sass/**/*.scss', './sass/**/*.css'];

gulp.task('default', ['watch']);

// Watcher: Will watch for changes in the sass directory and compile
gulp.task('watch', ['sass'], function() {
  gulp.watch(stylesheet_files, ['sass']);
});

// Sass: Will compile Sass into CSS
gulp.task('sass', function() {
  return gulp.src(stylesheet_files)
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('./css'));
});
