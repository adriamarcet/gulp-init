import gulp from 'gulp';
import gulpStyleLint from 'gulp-stylelint';
import {STYLE_FILES} from './styles.base.js';

const lintCss = function () {
    return gulp.src(STYLE_FILES)
        .pipe(gulpStyleLint({
            // failAfterError: false,
            reporters: [
                { formatter: 'string', console: true }
            ]
        }));
}

export default lintCss;
