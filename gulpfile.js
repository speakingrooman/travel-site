var gulp = require('gulp');
var watch = require('gulp-watch'),
postcss=require('gulp-postcss'),
autoprefixer=require('autoprefixer'),
cssvars=require('postcss-simple-vars'),
nested=require('postcss-nested'),
cssImport=require('postcss-import');

gulp.task('default',function(){
  console.log('Hooray - you created a Gulp task.');
});

gulp.task('HTML',function(HTML){
  console.log('Imagine something here.');
  HTML();
});

gulp.task('styles',function(styles){
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));

});

gulp.task('watch', function(done) {
    watch('./app/index.html', gulp.parallel('HTML'));
    watch('./app/assets/styles/**/*.css',gulp.parallel('styles'));
    done();
});
