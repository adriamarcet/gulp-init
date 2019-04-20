import gulp from 'gulp';
import gulpsass from 'gulp-sass';
import routes from '../routes.js';

const STYLE_FILES = `${routes.scss}**/*.scss`;
const STYLE_FILES_COMPILED = `${routes.dest}assets/css`;

const sass = function () {
    return gulp.src(STYLE_FILES)
      .pipe(gulpsass().on('error', gulpsass.logError))
      .pipe(gulp.dest(STYLE_FILES_COMPILED));
}

export { STYLE_FILES, STYLE_FILES_COMPILED, sass };
