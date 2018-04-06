var gulp = require('gulp'),
uglify = require('gulp-uglify'),
cssmin = require('gulp-cssmin'),
rename = require('gulp-rename'),
inject = require('gulp-inject'),
gulpSequence = require('gulp-sequence'),
browserSync = require('browser-sync').create(),
gutil  = require('gulp-util');

gulp.task('minify-js', function () {
gulp.src('prod/js/js.js')
.pipe(uglify())
.pipe(rename({suffix: '.min'}))
.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
.pipe(gulp.dest('build/js'))
});

gulp.task('minify-css', function () {
gulp.src('prod/css/style.css')
.pipe(cssmin())
.pipe(rename({suffix: '.min'}))
.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
.pipe(gulp.dest('build/css'))
});

gulp.task('html-build', function () {
gulp.src('prod/*.html')
.pipe(gulp.dest('build/'))
.on('end', function () {
gulp.src('build/index.html')
.pipe(inject(gulp.src('./build/js/js.min.js', {read: false}), {relative: true}))
.pipe(inject(gulp.src('./build/css/index.min.css', {read: false}), {relative: true}))
.pipe(gulp.dest('build/'));
})
});

gulp.task('dev', function () {
browserSync.init({
server: {
  baseDir: "./prod"
}
});
gulp.watch("./prod/*").on('change', browserSync.reload);
});

gulp.task('build', function () {
function update () {
gulpSequence(
  "minify-js",
  "minify-css",
  "html-build",
  function () {
    gulp.src('prod/css/style.css').pipe(gulp.dest('build/css'));
    gulp.src('prod/js/js.js').pipe(gulp.dest('build/js'));
    browserSync.reload
  }
)
}
browserSync.init({
server: {
  baseDir: "./build"
}
});
update ();
gulp.watch("./app/*").on('change', update);
});