const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
module.exports = defineConfig({
  video:false,
  viewportWidth: 1280,
  viewportHeight: 720,
  env: {
    allureReuseAfterSpec: true,
    allure:true,
    allureResultsPath:'allure-results',
    allureLogCypress:true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      getCompareSnapshotsPlugin(on, config);
      return require('./cypress/plugins/index.js')(on, config);
    },
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 60000
  }
});
