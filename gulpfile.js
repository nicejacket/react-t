var gulp = require('gulp');
var es3ify = require('gulp-es3ify');
var sass = require('gulp-sass');
 
gulp.task('copy-html', function() {
    return gulp.src(['src/index.html']).pipe(gulp.dest('dist'));
});

gulp.task('copy-js', function() {
    return gulp.src([
            'node_modules/html5shiv/src/html5shiv.js',
            'node_modules/html5shiv/src/html5shiv-printshiv.js',
            'node_modules/es5-shim/es5-shim.js',
            'node_modules/es5-shim/es5-sham.js'
        ]).pipe(gulp.dest('dist/js/lib'));
});

gulp.task('copy-css', function() {
    return gulp.src([
                'src/css/normalize.css',
                'node_modules/font-awesome/css/font-awesome.min.css'])
            .pipe(gulp.dest('dist/css/'));
});

gulp.task('copy-fonts', function() {
    return gulp.src(['node_modules/font-awesome/fonts/fontawesome-webfont.*'])
            .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('copy', ['copy-html', 'copy-js', 'copy-css', 'copy-fonts']);

gulp.task('es3ify', function () {
    return gulp.src('dist/*.js')
        .pipe(es3ify())
        .pipe(gulp.dest('dist'));
});

gulp.task('sass', function () {
  gulp.src('src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('default', ['copy', 'es3ify', 'sass']);