// An example configuration file.
const {
  SpecReporter
} = require("jasmine-spec-reporter");
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
  },

  // Framework to use. Jasmine is recommended.
  framework: "jasmine",

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: [`../tests/sample-project1.js`],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
  },
  onPrepare: async () => {
    require("ts-node").register({
      project: "../tsconfig.json"
    });
    // const junitReporter = new JUnitXmlReporter({
    //   savePath: "./e2e/test-results/E2E",
    //   consolidateAll: false
    // });
    // jasmine.getEnv().addReporter(junitReporter);
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      })
    );

  }
};
