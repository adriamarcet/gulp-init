const PATH_DIST = 'dist';
const PATH_DIST_ASSETS = `${PATH_DIST}/assets`;
const PATH_SRC = 'app';
const PATH_SRC_ASSETS = `${PATH_SRC}/resources/assets`;
const PATH_SRC_VIEWS = `${PATH_SRC}/resources/views`;

const FONTS_DEST = `${PATH_DIST_ASSETS}/fonts`;
const FONTS_SRC = `${PATH_SRC_ASSETS}/fonts`;
const SCRIPTS_DEST = `${PATH_DIST_ASSETS}/js`;
const SCRIPTS_SRC = `${PATH_SRC_ASSETS}/js`;
const STYLES_SRC = `${PATH_SRC_ASSETS}/scss/**/*.scss`;
const STYLES_DEST = `${PATH_DIST_ASSETS}/css`;
const MARKUP_SRC = `${PATH_SRC_VIEWS}/pages/*.twig`;
const MARKUP_DEST = `${PATH_DIST}`;

export {
    FONTS_DEST,
    FONTS_SRC,
    MARKUP_DEST,
    MARKUP_SRC,
    PATH_DIST,
    SCRIPTS_DEST,
    SCRIPTS_SRC,
    STYLES_DEST,
    STYLES_SRC,
}
