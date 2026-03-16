// playwright.config.js
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",

  timeout: 60 * 1000,

  expect: {
    timeout: 10000,
  },

  reporter: "html",
  use: {
    browserName: "chromium",
    headless: true,
    screenshot: "on",
    trace: "on",
  },
});
