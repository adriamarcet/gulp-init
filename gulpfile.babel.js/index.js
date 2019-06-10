import { series, parallel, watch } from 'gulp';

import { serve, reload } from './tasks/browser-sync';
import fonts from './tasks/fonts.js';
import markup, { MARKUP_FILES } from './tasks/markup.js';
import minifyCss from './tasks/styles.minify.js';
import scripts from './tasks/scripts.js';
import styles, { STYLE_FILES } from './tasks/styles.base.js';

const watcher = () => {
    watch(STYLE_FILES, series(styles, reload));
    watch(MARKUP_FILES, series(markup, reload));
}

const buildStyles = series(styles, minifyCss);
const taskDefault = parallel(markup, fonts, buildStyles, scripts, watcher);

// Task to be invoked via yarn start <const name>
export { buildStyles };
export default taskDefault;
