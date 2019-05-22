//Sin babel:
// const gulp = require('gulp');
//Con babel:
import gulp from 'gulp';
import { styles } from './tasks/styles.base.js';
import minifyCss from './tasks/styles.minify.js';
import fonts from './tasks/fonts.js';
import scripts from './tasks/scripts.js';

const buildStyles = gulp.series(styles, minifyCss);
const buildScripts = gulp.series(scripts);

gulp.task('default', gulp.parallel(fonts, buildStyles, buildScripts));
