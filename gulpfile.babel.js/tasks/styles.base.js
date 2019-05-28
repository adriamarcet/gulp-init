import gulp from 'gulp';
import gulpsass from 'gulp-sass';
import gulpStylelint from 'gulp-stylelint';
import routes from '../routes.js';

import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';

const STYLE_FILES = `${routes.scss}**/*.scss`;
const STYLE_FILES_COMPILED = `${routes.dest}assets/css`;

const sass = function () {
    return gulp.src(STYLE_FILES)
      .pipe(gulpStylelint({
        failAfterError: false,
        reporters: [
          {formatter: 'string', console: true}
        ]
      }))
      .pipe(gulpsass().on('error', gulpsass.logError))
      .pipe(sourcemaps.init())
      .pipe(postcss([autoprefixer()]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(STYLE_FILES_COMPILED));
}

const watchStyles = () => {
  return gulp.watch(STYLE_FILES, styles);
}

const styles = gulp.series(sass, watchStyles);

export { STYLE_FILES, STYLE_FILES_COMPILED, styles };
