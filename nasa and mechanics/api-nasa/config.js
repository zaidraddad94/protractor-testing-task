let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    framework: 'jasmine',
    suites: {
        apiNasa: 'asteroid-detailed-page/nasa-asteroids.spec.js',
    },
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--headless", "--disable-gpu", "--window-size=800,600"]
        }
    },
    baseUrl: 'https://www.asteroidsnear.com/',
    onPrepare: () => {
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter({
            suite: {
                displayNumber: true,
            },
        }));
    },
};
