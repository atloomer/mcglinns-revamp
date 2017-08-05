// Required
var gulp = require('gulp'),
    uglify = require('gulp-uglify');
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    compass = require('gulp-compass');
    plumber = require('gulp-plumber');
    autoprefixer = require('gulp-autoprefixer');
    rename = require('gulp-rename');
    del = require('del');

// Scripts
// Plumber must be first in order to work properly
gulp.task('scripts', function() {
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
  .pipe(plumber())
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'));
});

// Compass / Sass Tasks
gulp.task('compass', function() {
  gulp.src('app/scss/style.scss')
  .pipe(plumber())
  .pipe(compass({
    config_file: './config.rb',
    css: 'app/css',
    sass: 'app/scss',
    require: ['susy']
  }))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('app/css/'))
  .pipe(reload({stream:true}));
});

// HTML Tasks
gulp.task('html', function() {
  gulp.src('app/**/*.html')
  .pipe(reload({stream:true}));
});

// Browser-Sync Tasks
gulp.task('browser-sync', function() {
  browserSync({
    server:{
      baseDir: "./app/"
    }
  });
});

// Watch Tasks
gulp.task('watch', function() {
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/scss/**/*.scss', ['compass']);
  gulp.watch('app/**/*.html', ['html']);
});

// Default task
gulp.task('default', ['scripts', 'compass', 'html', 'browser-sync', 'watch']);
