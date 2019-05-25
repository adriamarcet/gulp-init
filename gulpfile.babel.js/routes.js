const routes = {
    src: 'app/resources/',
    dest: 'src/',
    scss: 'app/resources/assets/scss/',
    fonts_src: 'app/resources/assets/fonts/',
    fonts_dest: 'src/assets/fonts/',
    scripts_src: 'app/resources/assets/js/',
    scripts_dest: 'src/assets/js/',
}

const FONTS_SRC = routes.fonts_src,
    FONTS_DEST  = routes.fonts_dest,
    SCRIPTS_SRC = routes.scripts_src,
    SCRIPTS_DEST = routes.scripts_dest,
    MARKUP_SRC = 'app/resources/views/',
    MARKUP_DEST = 'src/views/',
    WEB_PATH = 'src/views';

export default routes;

export {
    FONTS_SRC,
    FONTS_DEST,
    SCRIPTS_SRC,
    SCRIPTS_DEST,
    MARKUP_SRC,
    MARKUP_DEST,
    WEB_PATH
}
