let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    suites: {
        popularmechanics: 'popular-mechanics-burger-menu/burger-menu-items.spec.js',
    },
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                "--headless",
                "--disable-gpu",
                "--window-size=1000,800"
            ]
        }
    },
    baseUrl: 'https://www.popularmechanics.com',
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true,
            },
        }));
        global.DEFAULT_WAITING_TIME = 9000;
        global.POPULAR_MECHANICS_URL = 'https://www.popularmechanics.com/#sidepanel';
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 9000
        global.EC = protractor.ExpectedConditions;

    },
};
