const cucumber = require("cypress-cucumber-preprocessor").default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Automation Report",
  },
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    pageLoadTimeout: 70000,
    supportFile: true,
    screenshotsFolder: "/Users/ctagb/report/",
    viewportWidth: 1000,
    viewportHeight: 660,
    video: true,
    watchForFileChanges: false,
    defaultCommandTimeout: 30000,
    include: ["./node_modules/cypress", "cypress/**/*.js"],

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      // cucumber
      on("file:preprocessor", cucumber());

      //browser launch
      // on('before:browser:launch', (browser={},args)=>{
      //   if(browser.name=='chrome'){
      //     args.push('--start-fullscreen')
      //     return args
      //   }
      //   if(browser.name=='electron'){
      //     args['fullscreen'] = true
      //     return agrs
      //   }
      // } )
    },
    specPattern: "cypress/integration",
  },
});
