import gulp from 'gulp';
import gulpsass from 'gulp-sass';
import gulpStyleLint from 'gulp-stylelint';
import routes from '../routes.js';

import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';

const STYLE_FILES = `${routes.scss}**/*.scss`;
const STYLE_FILES_COMPILED = `${routes.dest}assets/css`;

const styles = function () {
    return gulp.src(STYLE_FILES)
      .pipe(gulpStyleLint({
        // failAfterError: false,
        reporters: [
          { formatter: 'string', console: true }
        ]
      })
      .pipe(gulpsass().on('error', gulpsass.logError))
      .pipe(sourcemaps.init())
      .pipe(postcss([autoprefixer()]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(STYLE_FILES_COMPILED));
}

const watchStyles = function() {
  return gulp.watch(STYLE_FILES, ['styles']);
};

export { watchStyles };
