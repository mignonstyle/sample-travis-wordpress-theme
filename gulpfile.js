var gulp         = require( 'gulp' );
var jpegtran = require('imagemin-jpegtran');
//var optipng = require('imagemin-optipng');

var changed      = require( 'gulp-changed' );
var concat       = require( 'gulp-concat' );
var csso         = require( 'gulp-csso' );
var plumber      = require( 'gulp-plumber' );
var sass         = require( 'gulp-sass' );
var uglify       = require( 'gulp-uglify' );
var rename       = require( 'gulp-rename' );
var watch        = require( 'gulp-watch' );
var autoprefixer = require( 'gulp-autoprefixer' );
var requireDir   = require( 'require-dir' );
var browserSync  = require( 'browser-sync' );

gulp.task( 'default', function () {

} );
