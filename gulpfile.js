var  gulp = require('gulp');

var less = require('gulp-less');

gulp.task('testLess',function(){
	  gulp.src('src/less/index.less')
	      .pipe(less())
	      .pipe(gulp.dest('src/css'))
});


gulp.task('testWatch',function(){
	 gulp.watch('src/less/index.less',['testLess']);
})
