const routes = {
    src: 'app/resources/',
    dest: 'src/',
    scss: 'app/resources/assets/scss/',
    fonts_src: 'app/resources/assets/fonts/',
    fonts_dest: 'src/assets/fonts/',
    scripts_src: 'app/resources/assets/js/',
    scripts_dest: 'src/assets/js/',
}

const FONTS_SRC = routes.fonts_src;
const FONTS_DEST  = routes.fonts_dest;
const SCRIPTS_SRC = routes.scripts_src;
const SCRIPTS_DEST = routes.scripts_dest;

export default routes;

export {
    FONTS_SRC,
    FONTS_DEST,
    SCRIPTS_SRC,
    SCRIPTS_DEST
}
