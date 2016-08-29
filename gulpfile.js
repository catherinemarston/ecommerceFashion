const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');

const path = {
  sassSrc: '.public/assets/styles/**/*.scss',
  sassDest: '.public/assets/styles',
  // jsSrc: '[./public/app/app.module.js', './public/app/**/*.js'],
  jsSrc: './public/app/**/*.js',
  jsDest: './public/app'
};

gulp.task('sass', function() {
  gulp.src(path.sassSrc)
  .pipe(plumber({
    errorHandler: true
  }))
  .pipe(sourcemaps.init({
    loadMaps: true,
    debug: true
  }))
  .pipe(autoprefixer())
  .pipe(sass({
    errLogToConsole: true
  }))
  .pipe(sourcemaps.write())
  .pipe(plumber.stop())
  .pipe(gulp.dest(path.sassDest))
});

gulp.task('js', function(){
  return gulp.src([path.jsSrc + '/app.module.js', path.jsSrc + '/**/*.js'])
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(babel({
           presets: ['es2015']
       }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest(path.jsDest))
});

gulp.task('watch', function(){
  gulp.watch(path.jsSrc + '/**/*.js', ['js']);
  gulp.watch(path.sassSrc + '/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'js', 'watch']);
