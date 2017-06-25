/**
 * Created by markgr on 21/06/2017.
 */
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('scss/styles.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('scss/styles.scss', ['sass']);
});