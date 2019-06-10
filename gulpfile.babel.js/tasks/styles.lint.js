import gulp from 'gulp';
import gulpStyleLint from 'gulp-stylelint';

import { STYLES_SRC } from '../routes';

const lintCss = function () {
    return gulp.src(STYLES_SRC)
        .pipe(gulpStyleLint({
            // failAfterError: false,
            reporters: [
                { formatter: 'string', console: true }
            ]
        }));
}

export default lintCss;
