const routes = {
    src: 'app/resources/',
    dest: 'src/',
    scss: 'app/resources/assets/scss/',
    fonts_src: 'app/resources/assets/fonts/',
    fonts_dest: 'src/assets/fonts/',
    scripts_src: 'app/resources/assets/js/',
    scripts_dest: 'src/assets/js/',
}

const FONTS_DEST = routes.fonts_dest;
const FONTS_SRC = routes.fonts_src;
// const MARKUP_DEST = 'src/views';
// const MARKUP_SRC = 'app/resources/views';
const SCRIPTS_DEST = routes.scripts_dest;
const SCRIPTS_SRC = routes.scripts_src;

export default routes;

export {
    FONTS_SRC,
    FONTS_DEST,
    SCRIPTS_SRC,
    SCRIPTS_DEST,
    // MARKUP_SRC,
    // MARKUP_DEST
}
