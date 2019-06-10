import { series, parallel, watch } from 'gulp';

import styles, { STYLE_FILES } from './tasks/styles.base.js';
import minifyCss from './tasks/styles.minify.js';
import fonts from './tasks/fonts.js';
import scripts from './tasks/scripts.js';
import markup from './tasks/markup.js';
import { serve, reload } from './tasks/browser-sync';

const watchStyles = () => {
    watch(STYLE_FILES, series(styles, reload));
}

const buildStyles = series(styles, minifyCss);
const taskDefault = parallel(markup, fonts, buildStyles, scripts, watchStyles);

// Task to be invoked via yarn start <const name>
export { buildStyles };
export default taskDefault;
