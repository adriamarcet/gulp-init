import gulp from 'gulp';
import gulpsass from 'gulp-sass';
import routes from '../routes.js';


const sass = function () {
    return gulp.src(`${routes.scss}/**/*.scss`)
        .pipe(gulpsass().on('error', gulpsass.logError))
        .pipe(gulp.dest(`${routes.dest}/assets/css`));
}

// const lint = function () {
//     console.log('LINT says hello');
// }
// const buildStyles = gulp.series(lint, sass);

export default sass;
