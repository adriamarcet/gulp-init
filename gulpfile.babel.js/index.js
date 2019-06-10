import { series, parallel } from 'gulp';

import styles from './tasks/styles.base.js';
import minifyCss from './tasks/styles.minify.js';
import fonts from './tasks/fonts.js';
import scripts from './tasks/scripts.js';
import markup from './tasks/markup.js';
import {serve} from './tasks/browser-sync';

const buildStyles = series(styles, minifyCss);
const taskDefault = parallel(markup, fonts, buildStyles, scripts);

// Task to be invoked via yarn start <const name>
export { buildStyles };
export default taskDefault;

// To Do:
// const watchStyles = () => {
//     return gulp.watch(STYLE_FILES, styles);
// }
