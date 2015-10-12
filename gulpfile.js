var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');

// Gulp Sass Task 
gulp.task('sass', function() {
  gulp.src('./scss/{,*/}*.{scss,sass}')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
})

gulp.task('default', ['sass'], function () {
  gulp.watch('./scss/{,*/}*.{scss,sass}', ['sass'])
});