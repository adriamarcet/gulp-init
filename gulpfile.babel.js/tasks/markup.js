import gulp from 'gulp';
import twig from 'gulp-twig';
import { MARKUP_SRC, MARKUP_DEST } from '../routes.js';

const markup = function () {
    return gulp
        .src(`${MARKUP_SRC}pages/*.twig`)
        .pipe(twig({
            cache: false,
        }))
        .pipe(gulp.dest(`src/views/pages/`));
}

export default markup;
