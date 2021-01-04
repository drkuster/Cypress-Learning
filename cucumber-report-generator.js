var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonFile: 'cypress/cucumber-json/ecommerce.cucumber.json',
    output: 'test/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "macOS Big Sur",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);