import gulp from 'gulp';
import twig from 'gulp-twig';
import { MARKUP_SRC, MARKUP_DEST } from './styles.base.js';

const markup = function () {
    return gulp
        .src(`app/resources/views/*.twig`)
        .pipe(twig({
            cache: false,
        }))
        .pipe(gulp.dest(`src/`));
}

export default markup;
