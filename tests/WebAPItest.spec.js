const { test, expect } = require("@playwright/test");
const { APiUtils } = require("../utils/APIUtils");

const loginpayload = {
  userEmail: "lakshmi.itqa@gmail.com",
  userPassword: "QATester@9",
};

const orderpayload = {
  orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }],
};

let response;
let token;
let orderId = "";

test.beforeAll(async ({ request }) => {
  const apiUtils = new APiUtils(request, loginpayload);

  await apiUtils.getToken();
  response = await apiUtils.createOrder(orderpayload);

  token = apiUtils.token;
  orderId = apiUtils.orderId;
});

test("place the order", async ({ page, request }) => {
  const apiUtils = new APiUtils(request, loginpayload);
  token = await apiUtils.getToken();

  await page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, token);

  //before this we have to place the order using API and get the orderId and token, then we can use that token to set in local storage and then we can use that orderId to verify the order in UI
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for (let i = 0; i < (await rows.count()); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (rowOrderId && orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  //await page.pause();
  expect(orderIdDetails && orderId.includes(orderIdDetails)).toBeTruthy();
});
