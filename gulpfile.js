// $ npm install --save-dev gulp
// $ npm run build

var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	sassLint     = require('gulp-sass-lint'),
	rename       = require('gulp-rename'),
	csso         = require('gulp-csso'),
	postcss      = require('gulp-postcss'),
	cssnano      = require('cssnano');
	autoprefixer = require('autoprefixer'),
	doiuse       = require('doiuse'),
	mqpacker     = require('css-mqpacker'),
	watch        = require('gulp-watch'),
	plumber      = require('gulp-plumber'),
	jscs         = require('gulp-jscs'),
	jshint       = require('gulp-jshint'),
	stylish      = require('jshint-stylish'),
	runSequence  = require('run-sequence'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglify'),
	browserSync  = require('browser-sync');

gulp.task( 'default', function () {

} );
