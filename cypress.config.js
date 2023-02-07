const { defineConfig } = require("cypress");

module.exports = defineConfig({
 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://h01gv4m9ot8ntxg7jtqasg1ve.js.wpenginepowered.com/",
  },
});
