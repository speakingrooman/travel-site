var gulp = require('gulp');
var watch = require('gulp-watch'),
browserSync=require('browser-sync').create();


gulp.task('watch', function(done) {
    browserSync.init({
      notify:false,
      server:{
        baseDir:"app"
      }
    });

    watch('./app/index.html', function(){
      browserSync.reload();
    });

    watch('./app/temp/styles/styles.css',function(){
      browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css',gulp.parallel('cssInject'));
    done();
  });

gulp.task('cssInject', gulp.series(['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
}));
