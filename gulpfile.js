
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var base64 = require('gulp-base64');


var $CSS_OUTPUT = 'compressed'; // compressed, compact, expanded, nested

var errorHandler = function(err) {
  console.log("[ERROR] " + err.message);
  this.emit('end');
};

gulp.task('build-css', function() {
  return gulp.src('sass/bundle.scss')
    .pipe(sass({ outputStyle: $CSS_OUTPUT }))
    .on('error', errorHandler)
    .pipe(rename("bundle.css"))
    .pipe(base64({
      baseDir: "img",
      extenstions: ["svg", "png"],
      deleteAfterEncoding: false,
      debug: true
    }))
    .pipe(gulp.dest('./', { overwrite: true }));
});

gulp.task("build", ["build-css"]);
gulp.task('default', ['build']);
