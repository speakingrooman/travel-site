var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default',function(){
  console.log('Hooray - you created a Gulp task.');
});

gulp.task('HTML',function(HTML){
  console.log('Imagine something here.');
  HTML();
});

gulp.task('styles',function(styles){
  console.log('Imagine Sass or PostCss here.');
  styles();
});

gulp.task('watch', function(done) {
    watch('./app/index.html', gulp.parallel('HTML'));
    watch('./app/assets/styles/**/*.css',gulp.parallel('styles'));
    done();
});
