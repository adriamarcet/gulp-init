import gulp from 'gulp';
import { FONTS_DEST, FONTS_SRC } from '../routes.js';

const fonts = function () {
    return gulp.src(`${FONTS_SRC}**/*`)
        .pipe(gulp.dest(`${FONTS_DEST}`));
}

export default fonts;
