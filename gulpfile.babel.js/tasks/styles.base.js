import gulp from 'gulp';
import gulpsass from 'gulp-sass';
import routes from '../routes.js';

const STYLE_FILES = `${routes.scss}/**/*.scss`;

const sass = function () {
    return gulp.src(STYLE_FILES)
      .pipe(gulpsass().on('error', gulpsass.logError))
      .pipe(gulp.dest(`${routes.dest}/assets/css`));
}

export { STYLE_FILES, sass };
