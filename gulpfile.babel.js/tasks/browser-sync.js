import browserSync from 'browser-sync';
import { WEB_PATH } from '../routes';

const reload = (done) => {
    browserSync.reload();
    done();
};

const serve = (done) => {
    browserSync.init({
        server: { baseDir: `${WEB_PATH}/` },
        port: 5000,
        ui: { port: 5001 },
        options: { reloadDelay: 250 },
        open: true,
        notify: true,
      });
      done();
};

export {reload, serve};