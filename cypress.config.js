const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: {
     openMode: 0,
     runMode: 1,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: true,
      json: true,
      reportDir: "cypress/reports/mochawesome"
    }
  },
});