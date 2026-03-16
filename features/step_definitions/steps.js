const { When, Then, Given } = require("@cucumber/cucumber");
const { POManager } = require("../../pageobject/POManager");
const { chromium } = require("playwright");
const { expect } = require("@playwright/test");

Given(
  "a login to the ecommerce platform with {string} and {string}",
  { timeout: 100 * 1000 },
  async function (username, password) {
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username, password);
  },
);

When("Add {string} to the cart", async function (productName) {
  const dashboardPage = this.poManager.getDashboardPage();
  await dashboardPage.searchProductAddCart(productName);
  await dashboardPage.navigateToCart();
});

Then("verify {string} is displayed in the cart", async function (productName) {
  const cartPage = this.poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(productName);
  await cartPage.Checkout();
});

When("enter valid details and place the order", async function () {
  // @ts-ignore
  const ordersReviewPage = this.poManager.getOrdersReviewPage();
  await ordersReviewPage.searchCountryAndSelect("ind", "India");

  this.orderId = await ordersReviewPage.SubmitAndGetOrderId(); // save order id
  console.log(this.orderId);
});

Then(
  "Verify order is present in the order history with {string}",
  async function (orderId) {
    const dashboardPage = this.poManager.getDashboardPage();
    await dashboardPage.navigateToOrders();

    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(this.orderId);

    expect(
      this.orderId.includes(await ordersHistoryPage.getOrderId()),
    ).toBeTruthy();
  },
);

Given(
  "a login to the ecommerce2 platform with {string} and {string}",
  async function (username, Password) {
    const userName = this.page.locator("#username");
    const password = this.page.locator("#password");
    const signIn = this.page.locator("#signInBtn");

    await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await this.page.title());

    await userName.fill(username);
    await password.fill(Password);
    await signIn.click();
  },
);

Then(
  "verify error message is displayed for invalid login attempt",
  async function () {
    console.log(await this.page.locator("[style*='block']").textContent());
    await expect(this.page.locator("[style*='block']")).toContainText(
      "Incorrect",
    );
  },
);
