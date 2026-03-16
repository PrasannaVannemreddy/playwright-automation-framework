const {
  Before,
  After,
  BeforeStep,
  AfterStep,
  Status,
} = require("@cucumber/cucumber");
const { POManager } = require("../../pageobject/POManager");
const { chromium } = require("playwright");

Before(async function () {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  this.page = page; // ✅ save in cucumber context
  this.poManager = new POManager(page); // ✅ save in cucumber context
});

BeforeStep(function () {
  console.log("I'm executing before each step");
});

AfterStep(async function ({ result }) {
  if (result.status === Status.FAILED) {
    console.log("Step failed, taking screenshot...");
    await this.page.screenshot({ path: `screenshot-${Date.now()}.png` });
  }
});

After(function () {
  console.log("I'm thhe last step and I will execute after each scenario");
});
