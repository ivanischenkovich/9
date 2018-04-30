var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
  inject = require('gulp-inject'),
  gulpSequence = require('gulp-sequence'),
  browserSync = require('browser-sync').create(),
  gutil  = require('gulp-util');

gulp.task('minify-js', function () {
  gulp.src('src/js/registration.js')
  .pipe(uglify())
  .pipe(rename({suffix: '.min'}))
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('build/js'))
});

gulp.task('minify-css', function () {
  gulp.src('src/css/style.css')
  .pipe(cssmin())
  .pipe(rename({suffix: '.min'}))
  .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
  .pipe(gulp.dest('build/css'))
});

gulp.task('html-build', function () {
  gulp.src('src/*.html')
  .pipe(gulp.dest('build/'))
  gulp.src('src/js/jquery-3.2.1.min.js')
  .pipe(gulp.dest('build/js'))
  .on('end', function () {
    gulp.src('build/index.html')
    .pipe(inject(gulp.src('./build/js/registration.min.js', {read: false}), {relative: true}))
    .pipe(inject(gulp.src('./build/css/style.min.css', {read: false}), {relative: true}))
    .pipe(gulp.dest('build/'));
  })
});
  
gulp.task('dev', function () {
  browserSync.init({
	server: {
	  baseDir: "./build"
	}
  });
  gulp.watch("./src/*").on('change', update);
  gulp.watch("./src/*").on('change', browserSync.reload);
});

gulp.task('build', function () {
  update ();
  gulp.watch("./src/*").on('change', update);
});

function update () {
  gulpSequence(
    "minify-js",
	"minify-css",
	  "html-build",
	  function () {
	    gulp.src('src/css/style.css').pipe(gulp.dest('build/css'));
		gulp.src('src/js/registration.js').pipe(gulp.dest('build/js'));
    }
  )
}
