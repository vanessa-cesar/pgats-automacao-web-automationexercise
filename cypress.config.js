const { defineConfig } = require("cypress");

module.exports = defineConfig({
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