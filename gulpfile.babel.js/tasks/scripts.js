import gulp from 'gulp';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import { SCRIPTS_DEST, SCRIPTS_SRC } from '../routes.js';

const scripts = function() {
    return gulp.src(`${SCRIPTS_SRC}*.js`)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify({ compress: false }))
        .pipe(gulp.dest(`${SCRIPTS_DEST}`))
}

export default scripts;
