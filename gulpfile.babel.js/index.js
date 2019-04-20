//Sin babel:
// const gulp = require('gulp');
//Con babel:
import gulp from 'gulp';
import {sass} from './tasks/styles.base.js';
import lintCss from './tasks/styles.lint.js';
import minifyCss from './tasks/styles.minify.js';

const buildStyles = gulp.series(lintCss, sass, minifyCss);

gulp.task('default', buildStyles);

// To do
// css-nano configurar sin z-index
// autoprefixer
