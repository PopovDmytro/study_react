// import * as Sentry from '@sentry/browser';

function init () {

    // Sentry.init({
    //     dsn: 'https://283a84aaa3984224adff64f50ab7071d@sentry.io/1319122'
    // });
}

function log(error) {
    // Sentry.captureException(error);
    console.error(error);
}

export default {
    init,
    log
};