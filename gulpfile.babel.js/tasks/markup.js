import gulp from 'gulp';
import twig from 'gulp-twig';

import { MARKUP_SRC, MARKUP_DEST } from '../routes.js';

import DATA_EN from '../../data/en/translations.json';
import DATA_ES from '../../data/es/translations.json';

const languages = {
    es: DATA_ES,
    en: DATA_EN
};

const defaultLanguage = 'en';

const generateMarkup = (locale, t) => {
    const route = locale === defaultLanguage ? '' : `/${locale}`;
    return gulp
        .src(`${MARKUP_SRC}`)
        .pipe(twig({
            cache: false,
            base: 'app/resources',
            data: {
                languages: languages,
                t
            }
        }))
        .pipe(gulp.dest(`${MARKUP_DEST}${route}/`));
}

const markup = function () {
    Object.keys(languages).map(actual => {
        console.log(actual);
        return generateMarkup(actual, languages[actual]);
    });
}

const MARKUP_FILES = MARKUP_SRC;

export { MARKUP_FILES };
export default markup;
