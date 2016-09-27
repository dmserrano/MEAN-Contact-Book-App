'use strict';

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
/////////////////////////////////////////


///////////////////////////////////////
//Nodemon start task
gulp.task('start', function() {
  nodemon({
    script: 'server/server.js',
    tasks: [],
    env: { 'NODE_ENV': 'development' }
  })
});
///////////////////////////////////////


/////////////////////////////////////////
//Sass task
gulp.task('sassify', function() {
  return gulp.src('./client/styles/sass/*.sass')
  // sourcemaps + sass + error handling
  .pipe(sourcemaps.init())
  .pipe(sass({
    sourceComments: true,
    outputStyle: 'compressed'  // nested || compressed
  }))
  .on('error', function () {})
  // generate .maps
  .pipe(sourcemaps.write({
    'includeContent': false,
    'sourceRoot': '.'
  }))
  .pipe(sourcemaps.write({
    'includeContent': true
  }))
  // write sourcemaps to a specific directory
  // give it a file and save
  .pipe(gulp.dest('./client/styles/css'));
});

gulp.task('watch', function() {
  gulp.watch('./client/styles/sass/*.sass', ['sassify']);
});
/////////////////////////////////////////


/////////////////////////////////////////
gulp.task('default', ['start', 'sassify', 'watch']);
/////////////////////////////////////////
