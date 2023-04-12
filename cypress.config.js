const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  video:false,
  viewportWidth: 1280,
  viewportHeight: 720,
  env: {
    allureReuseAfterSpec: true,
    allure:true,
    allureResultsPath:'allure-results',
    allureLogCypress:true,
    browserResolution:'1920_768'
  },
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return require('./cypress/plugins/index.js')(on, config);
    },
    defaultCommandTimeout: 30000
  }
});
