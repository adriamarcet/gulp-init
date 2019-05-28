//Sin babel:
// const gulp = require('gulp');

//Con babel:
import { series, parallel } from 'gulp';

import { styles } from './tasks/styles.base.js';
import minifyCss from './tasks/styles.minify.js';
import fonts from './tasks/fonts.js';
import scripts from './tasks/scripts.js';
import markup from './tasks/markup.js';

const buildStyles = series(styles, minifyCss);
const buildScripts = series(scripts);

const taskDefault = parallel(markup, fonts, buildStyles, buildScripts);

export { buildStyles };
export default taskDefault;
