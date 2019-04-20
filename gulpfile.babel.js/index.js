//Sin babel:
// const gulp = require('gulp');
//Con babel:
import gulp from 'gulp';
import {sass} from './tasks/styles.base.js';
import lintCss from './tasks/styles.lint.js';

// const dest = () => gulp.src(`${routes.src}/*`).pipe(gulp.dest(`${routes.dest}`));

//Concatenar tareas antes de gulp 4:
// gulp.task('default', ['dest'], function(done) {
//     console.log('Gulp < 4 says Hello with Babel!');
//     done();
// })

const buildStyles = gulp.series(lintCss, sass);
//Concatenar tareas gulp 4 : (gulp.series, gulp.parallel):
gulp.task('default', buildStyles);

// To do
// css-nano configurar sin z-index
// autoprefixer
