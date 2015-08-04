var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var istanbul = require('gulp-istanbul');
var mocha = require('gulp-mocha');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var gutil = require('gulp-util');

var browserSync = require('browser-sync').create();
var exec = require('child_process').exec;
var del = require('del');
var jest = require('jest-cli');
var webpack = require('webpack');
var webpackConfig = require('./webpack.development.js');
var webpackOptions = Object.create(webpackConfig);

var jestConfig = {
  collectCoverage: true,
  rootDir: "./client",
  scriptPreprocessor: "../preprocessor.js",
  unmockedModulePathPatterns: [
    "react",
    "react-tools",
    "nock"
  ]
};

gulp.task('test', function(done) {
  gulp.src('server/build/**/*.js')
    .pipe(istanbul({ includeUntested: true })) // Covering files
    .pipe(istanbul.hookRequire()) // Force `require` to return covered files
    .on('finish', function () {
      gulp.src('server/build/test/*.js')
        .pipe(mocha())
        .pipe(istanbul.writeReports()) // Creating the reports after tests ran
        .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })) // Enforce a coverage of at least 90%
        .on('error', function(e) { gutil.log(e) })
        .on('end', function () {
          done();
        });
    });
});

// modify some webpack config options
webpackOptions.debug = true;

// create a single instance of the compiler
var webpackCompiler = webpack(webpackOptions);

// start hapi server
gulp.task('serve', ['build'], function() {
  exec('node server/build/server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

// launch server w browser sync
gulp.task('sync', ['serve'], function() {
  browserSync.init({
    proxy: 'http://localhost:3000',
    port: 4000,
    browser: ['google-chrome']
  });

  gulp.watch('client/styles/*.scss', ['sass']);
  gulp.watch('client/*.html').on('change', browserSync.reload);
  gulp.watch('client/dist/*.js').on('change', browserSync.reload);
});

// build task without running
gulp.task('build', ['clean', 'webpack', 'tsc', 'images', 'sass'], function() {
  // we good
});

// clean build outputs
gulp.task('clean', function(callback) {
  del(['server/build/*', 'client/dist/css/*', 'client/dist/img/*', 'client/dist/*.*'], callback);
});

// webpack bundling
gulp.task('webpack', function(callback) {
	webpackCompiler.run(function(err, stats) {
		if (err) throw new gutil.PluginError('webpack-build', err);
		callback();
	});
});

// typescript compile
gulp.task('tsc', function() {
  var tsResult = gulp.src('server/**/*.ts')
    .pipe(ts({
      module: "commonjs",
      target: "ES5",
      noImplicitAny: true
    }));
  return tsResult.js.pipe(gulp.dest('server/build'));
});

// image optimization
gulp.task('images', function() {
  return gulp.src('client/images/*')
    // pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('client/dist/img'));
});

// compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('client/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('client/dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['sync']);
