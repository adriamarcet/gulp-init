import gulp from 'gulp';
import twig from 'gulp-twig';
// import { MARKUP_SRC, MARKUP_DEST } from '../routes.js';

const markup = function () {
    return gulp
        .src(`app/resources/views/pages/**/*.twig`)
        .pipe(twig({
            cache: false,
            base: `app/resources`,
        }))
        .pipe(gulp.dest(`dist`));
}

export default markup;
