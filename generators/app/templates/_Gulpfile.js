var gulp = require('gulp'),
  prefix = require('gulp-autoprefixer'),
  usemin = require('gulp-usemin'),
  uglify = require('gulp-uglify'),
  minifyHtml = require('gulp-minify-html'),
  minifyCss = require('gulp-minify-css'),
  rev = require('gulp-rev'),
  connect = require('gulp-connect'),
  jshint = require('gulp-jshint'),
  csslint = require('gulp-csslint');


var paths = {
  scripts: 'js/**/*.js',
  css: ['css/**/*.css', '!css/vendor/**/*.css'],
  html: 'index.html'
};


gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(prefix("last 2 versions"))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('csslint', function() {
  gulp.src(paths.css)
    .pipe(csslint('.csslintrc'))
    .pipe(csslint.reporter());
});

gulp.task('scripts', function() {
  return gulp.src(paths.scripts)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('usemin', ['css'], function() {
  gulp.src('./*.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      html: [minifyHtml({empty: true})],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch([paths.html, paths.css], ['csslint', 'css', 'usemin']);
  gulp.watch([paths.scripts], ['scripts', 'usemin']);
});

gulp.task('serve', function(){
  connect.server({
    livereload: true,
    port: 8767
  });
});

gulp.task('default', ['serve', 'watch', 'usemin']);
