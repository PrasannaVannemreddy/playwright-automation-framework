const { test, expect } = require("@playwright/test");
const { customtest } = require("./utils/test-base");

const { POManager } = require("../pageobject/POManager");
//Json->string->js object
const dataset = JSON.parse(
  JSON.stringify(require("./utils/placeorderTestData.json")),
);

for (const data of dataset) {
  test(`@Web Client App login for ${data.productName}`, async ({ page }) => {
    const poManager = new POManager(page);
    //js file- Login js, DashboardPage
    const products = page.locator(".card-body");
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.username, data.password);

    //adding item to cart and place order
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();
    //cart page - verify product is displayed, checkout
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyProductIsDisplayed(data.productName);
    await cartPage.Checkout();
    //orders review page - search country, select and place order, get orderId
    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);
    //orders history page - verify order is present in order history
    await dashboardPage.navigateToOrders();
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    // @ts-ignore
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    // @ts-ignore
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
  });
}

// @ts-ignore
customtest(`Client App login`, async ({ page, testDataForOrder }) => {
  const poManager = new POManager(page);
  //js file- Login js, DashboardPage
  const products = page.locator(".card-body");
  const loginPage = poManager.getLoginPage();
  await loginPage.goTo();
  await loginPage.validLogin(
    testDataForOrder.username,
    testDataForOrder.password,
  );
  const dashboardPage = poManager.getDashboardPage();
  await dashboardPage.searchProductAddCart(testDataForOrder.productName);
  await dashboardPage.navigateToCart();

  const cartPage = poManager.getCartPage();
  await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName);
  await cartPage.Checkout();
});
//test files will trigger parallel
//individual tests in the file will run in sequence
