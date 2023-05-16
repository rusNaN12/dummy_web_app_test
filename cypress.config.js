const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    "pageLoadTimeout": 120000,
    "chromeWebSecurity": false, 
    "env": {
        "normal": "standard_user",
        "locked": "locked_out_user",
        "problem": "problem_user",
        "glitch": "performance_glitch_user",
        "password": "secret_sauce"
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
