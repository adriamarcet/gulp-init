import { series, parallel, watch } from 'gulp';

import { serve, reload } from './tasks/browser-sync';
import fonts from './tasks/fonts.js';
import markup, { MARKUP_FILES } from './tasks/markup.js';
import minifyCss from './tasks/styles.minify.js';
import scripts, { SCRIPT_FILES } from './tasks/scripts.js';
import styles, { STYLE_FILES } from './tasks/styles.base.js';

const watcher = () => {
    watch(MARKUP_FILES, series(markup, reload));
    watch(SCRIPT_FILES, series(scripts, reload));
    watch(STYLE_FILES, series(styles, reload));
}

const buildStyles = series(styles, minifyCss);
const taskDefault = parallel(markup, fonts, buildStyles, scripts, watcher);

// Invoked with yarn start <const name>
export { buildStyles };

// Invoked with yarn start
export default taskDefault;
