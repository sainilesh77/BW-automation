const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin')
module.exports = defineConfig({
  video:false,
  viewportWidth: 1280,
  viewportHeight: 720,
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  
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
      getCompareSnapshotsPlugin(on, config);
      return require('./cypress/plugins/index.js')(on, config);
    },
    defaultCommandTimeout: 15000,
    pageLoadTimeout: 45000,
    testIsolation: false,
  }
});
