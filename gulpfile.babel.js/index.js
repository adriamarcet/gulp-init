//Sin babel:
// const gulp = require('gulp');
//Con babel:
import gulp from 'gulp';
import sass from './tasks/styles.js';


// const dest = () => gulp.src(`${routes.src}/*`).pipe(gulp.dest(`${routes.dest}`));

//Concatenar tareas antes de gulp 4:
// gulp.task('default', ['dest'], function(done) {
//     console.log('Gulp < 4 says Hello with Babel!');
//     done();
// })

//Concatenar tareas gulp 4 : (gulp.series, gulp.parallel):
gulp.task('default', gulp.series(sass));

// To do
// css-nano configurar sin z-index
// autoprefixer
