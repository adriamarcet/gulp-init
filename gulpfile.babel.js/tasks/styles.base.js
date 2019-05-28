import autoprefixer from 'autoprefixer';
import gulp from 'gulp';
import gulpsass from 'gulp-sass';
import gulpStylelint from 'gulp-stylelint';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';

import { STYLES_DEST, STYLES_SRC } from '../routes.js';

const sass = () => {
    return gulp.src(STYLES_SRC)
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
        .pipe(gulp.dest(STYLES_DEST));
}

const styles = gulp.series(sass);
export default styles;
