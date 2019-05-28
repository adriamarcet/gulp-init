import gulp from 'gulp';
import cssnano from 'gulp-cssnano';

import { STYLES_DEST } from '../routes';

const minifyCss = function () {
    return gulp.src(`${ STYLES_DEST }/styles.css`)
        .pipe(cssnano({ zindex: false }))
        .pipe(gulp.dest(`${ STYLES_DEST }`));
}

export default minifyCss;
