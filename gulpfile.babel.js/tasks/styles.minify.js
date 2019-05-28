import gulp from 'gulp';
import cssnano from 'gulp-cssnano';
import { STYLE_FILES_COMPILED } from './styles.base';

const minifyCss = function () {
    return gulp.src(`${STYLE_FILES_COMPILED}/styles.css`)
        .pipe(cssnano({ zindex: false }))
        .pipe(gulp.dest(`${STYLE_FILES_COMPILED}`));
}

export default minifyCss;
