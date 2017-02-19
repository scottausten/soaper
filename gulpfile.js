
var gulp = require('gulp');
var mocha = require('gulp-spawn-mocha');
var batch = require('gulp-batch');

gulp.task('default', function(){
	return gulp.src(['test/*.js'])
		.pipe(mocha({
			//istanbul: true,
			colors:true
		}))
		//.on('error', function (err) {
        //    console.log(err.stack);
        //});
});

gulp.watch(['test/**'], batch(function (events, cb) {
    return gulp.src(['./**/*.js'])
        .pipe(mocha({
        	colors:true,
			//istanbul: true			
		}))
		.on('error', function (err) {
            console.log(err.stack);
        });
}));