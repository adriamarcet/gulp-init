import gulp from 'gulp';
import gulpsass from 'gulp-sass';
import gulpStyleLint from 'gulp-stylelint';
import routes from '../routes.js';

const sass = function () {
    return gulp.src(`${routes.scss}/**/*.scss`)
      .pipe(gulpsass().on('error', gulpsass.logError))
      .pipe(gulp.dest(`${routes.dest}/assets/css`));
}

const lintCss = function () {
  return gulp.src(`${routes.scss}/**/*.scss`)
    .pipe(gulpStyleLint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }));
}

export { lintCss, sass };
