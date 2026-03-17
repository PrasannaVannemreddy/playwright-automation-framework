// playwright.config.js
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",

  timeout: 60 * 1000,

  expect: {
    timeout: 10000,
  },

  reporter: "html",

  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        headless: true,
        screenshot: "on",
        trace: "on",
      },
    },
    {
      name: "firefox",
      use: {
        browserName: "webkit",
        headless: false,
        screenshot: "on",
        video: "retain-on-failure",
        trace: "on",
        //viewport: { width: 1280, height: 720 },
        ...devices["iPhone 12"],
        // ✅ Docker connection
        connectOptions: {
          wsEndpoint: "ws://localhost:3000",
        },
      },
    },
  ],
});
