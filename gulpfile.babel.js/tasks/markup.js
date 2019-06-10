import gulp from 'gulp';
import twig from 'gulp-twig';
import { MARKUP_SRC, MARKUP_DEST } from '../routes.js';

const markup = function () {
    return gulp
        .src(`${MARKUP_SRC}`)
        .pipe(twig({
            cache: false,
            base: `app/resources`,
        }))
        .pipe(gulp.dest(`${MARKUP_DEST}`));
}

const MARKUP_FILES = MARKUP_SRC;

export { MARKUP_FILES };
export default markup;
