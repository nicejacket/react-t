var gulp = require('gulp');
var es3ify = require('gulp-es3ify');
var sass = require('gulp-sass');
 
gulp.task('copy', function() {
    return gulp.src([
	    	'src/index.html',
	    	'node_modules/html5shiv/src/html5shiv.js',
	    	'node_modules/html5shiv/src/html5shiv-printshiv.js',
	    	'node_modules/es5-shim/es5-shim.js',
	    	'node_modules/es5-shim/es5-sham.js'
    	]).pipe(gulp.dest('build'));
});
gulp.task('es3ify', function () {
    return gulp.src('build/*.js')
        .pipe(es3ify())
        .pipe(gulp.dest('build'));
});
gulp.task('sass', function () {
  gulp.src('src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['copy', 'es3ify', 'sass']);