var gulp = require('gulp');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var cleancss = require('gulp-cleancss');
var htmlmin = require('gulp-htmlmin');
var gm = require('gulp-gm');
 
//TODO: Automate creating images of appropriate size and resolution
gulp.task('imagetest', function () {
  gulp.src('test.png')
 
  .pipe(gm(function (gmfile) {
 
    return gmfile.resize(100, 100);
 
  }, {
    imageMagick: true
  }))
 
  .pipe(gulp.dest('dist'));
});

gulp.task('lint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('styles:dist', function() {
  gulp.src(['css/*.css', 'views/css/*.css'])
    .pipe(cleancss({keepBreaks: false}))
    .pipe(gulp.dest('dist/css'));
});


gulp.task('scripts', function() {
  return gulp.src(['js/*.js', 'views/js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));    
});

gulp.task('minify', function() {
  return gulp.src(['src/*.html', 'views/*.html'])
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['lint', 'scripts', 'styles:dist', 'minify']);