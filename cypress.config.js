const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    menus:"Test"
  },
  reporter: 'mochawesome',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl:"https://hc7abfv9fjaakyg28fdla4s0n.js.wpenginepowered.com/",
    apiBaseUrl:"https://businesswirdev.wpengine.com/",
    defaultCommandTimeout: 30000
  },
});
